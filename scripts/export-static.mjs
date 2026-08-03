import { mkdir, writeFile } from "node:fs/promises";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static export failed with status ${response.status}`);
}

const html = await response.text();
const clientDirectory = new URL("../dist/client/", import.meta.url);
await mkdir(clientDirectory, { recursive: true });
await writeFile(new URL("index.html", clientDirectory), html, "utf8");
await writeFile(new URL("404.html", clientDirectory), html, "utf8");

console.log("Static homepage exported to dist/client/index.html");
