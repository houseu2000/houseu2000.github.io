import { mkdir, readFile, writeFile } from "node:fs/promises";

const projects = JSON.parse(
  await readFile(
    new URL("../app/research-projects.json", import.meta.url),
    "utf8",
  ),
);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const clientDirectory = new URL("../dist/client/", import.meta.url);

async function render(path, expectedStatus = 200, accept = "text/html") {
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (response.status !== expectedStatus) {
    throw new Error(
      `Static export of ${path} failed: expected ${expectedStatus}, got ${response.status}`,
    );
  }
  return response.text();
}

const slugs = projects.map(({ slug }) => slug);
if (
  new Set(slugs).size !== slugs.length ||
  slugs.some((slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
) {
  throw new Error("Research slugs must be unique, lowercase URL-safe names.");
}

await mkdir(clientDirectory, { recursive: true });
await writeFile(new URL(".nojekyll", clientDirectory), "", "utf8");
await writeFile(
  new URL("index.html", clientDirectory),
  await render("/"),
  "utf8",
);
await writeFile(
  new URL(".rsc", clientDirectory),
  await render("/.rsc", 200, "text/x-component"),
  "utf8",
);
for (const slug of slugs) {
  const directory = new URL(`research/${slug}/`, clientDirectory);
  await mkdir(directory, { recursive: true });
  await writeFile(
    new URL("index.html", directory),
    await render(`/research/${slug}/`),
    "utf8",
  );
  await writeFile(
    new URL(`research/${slug}.rsc`, clientDirectory),
    await render(`/research/${slug}.rsc`, 200, "text/x-component"),
    "utf8",
  );
}
await writeFile(
  new URL("404.html", clientDirectory),
  await render("/__missing-page__/", 404),
  "utf8",
);
console.log(
  `Exported homepage, ${slugs.length} research pages and a 404 page to dist/client/`,
);
