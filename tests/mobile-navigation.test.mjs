import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exported mobile menu is initially hidden and every link has a destination", async () => {
  const html = await readFile(
    new URL("../dist/client/index.html", import.meta.url),
    "utf8",
  );
  const menu = html.match(
    /<nav[^>]*id="mobile-navigation"[^>]*>[\s\S]*?<\/nav>/,
  )?.[0];
  assert.ok(menu, "mobile navigation must be rendered");
  assert.match(menu, /hidden=""/);
  assert.match(html, /aria-controls="mobile-navigation" aria-expanded="false"/);
  const links = [...menu.matchAll(/href="#([^"]+)"/g)];
  assert.equal(links.length, 7);
  for (const [, id] of links) assert.ok(html.includes(`id="${id}"`));
});
