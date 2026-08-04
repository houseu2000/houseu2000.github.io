import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("mobile navigation closes without locking page scrolling", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(source, /event\.preventDefault\(\)/);
  assert.match(source, /setMobileNavOpen\(false\)/);
  assert.match(source, /scrollIntoView\(\{ behavior: "smooth", block: "start" \}\)/);
  assert.match(source, /document\.documentElement\.style\.removeProperty\("overflow"\)/);
  assert.match(source, /document\.body\.style\.removeProperty\("overflow"\)/);
  assert.doesNotMatch(source, /document\.body\.style\.overflow\s*=\s*["']hidden["']/);
});
