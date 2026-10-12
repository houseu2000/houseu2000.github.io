import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
const client = new URL("../dist/client/", import.meta.url);
const projects = JSON.parse(
  await readFile(
    new URL("../app/research-projects.json", import.meta.url),
    "utf8",
  ),
);
const home = await readFile(new URL("index.html", client), "utf8");

test("homepage exports the seven resume sections in reading order", () => {
  let previous = -1;
  for (const id of [
    "about",
    "education",
    "research",
    "experience",
    "publications",
    "honors",
    "activities",
  ]) {
    const position = home.indexOf(`id="${id}"`);
    assert.ok(position > previous, `${id} must exist in resume order`);
    previous = position;
  }
  assert.match(home, /DCON Painting/);
  assert.match(home, /清华大学/);
});

for (const project of projects) {
  test(`${project.slug} has a directly accessible static detail page`, async () => {
    assert.ok(home.includes(`href="/research/${project.slug}/?lang=zh"`));
    const html = await readFile(
      new URL(`research/${project.slug}/index.html`, client),
      "utf8",
    );
    assert.ok(html.includes(project.title.zh));
    assert.match(html, /<h1[^>]*>/);
    if (project.details.length === 0) {
      assert.match(html, /研究详情，待补充/);
    } else {
      assert.doesNotMatch(html, /研究详情，待补充/);
      for (const block of project.details) {
        if (block.heading) assert.ok(html.includes(block.heading.zh));
        if (block.type === "image" && block.src.startsWith("/")) {
          await access(new URL(block.src.slice(1), client));
        }
        if (block.type === "chapter") {
          assert.ok(html.includes(`id="${block.id}"`));
          assert.ok(html.includes(`href="#${block.id}"`));
          if (block.publication)
            assert.ok(html.includes(block.publication.title));
        }
        const videos =
          block.type === "videos"
            ? block.items
            : block.type === "video"
              ? [block]
              : [];
        for (const video of videos) {
          assert.ok(html.includes(`src="${video.src}"`));
          await access(new URL(video.src.slice(1), client));
          if (video.poster)
            await access(new URL(video.poster.slice(1), client));
        }
      }
      if (project.publication)
        assert.ok(html.includes(project.publication.title));
    }
    assert.ok(html.includes('href="/?lang=zh#research"'));
    assert.ok(
      !html.includes('class="research-card"'),
      "detail page must not be a homepage fallback",
    );
    const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)/g)];
    assert.ok(assets.length > 0, "detail page must include application assets");
    for (const [, path] of assets) await access(new URL(path.slice(1), client));
  });
}

test("unknown URLs get a real 404 document instead of the homepage", async () => {
  const html = await readFile(new URL("404.html", client), "utf8");
  assert.match(html, /页面未找到/);
  assert.ok(!html.includes('class="research-card"'));
});
