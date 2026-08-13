import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders English as the default portfolio language", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<html lang="en">/);
  assert.match(html, /From complete robot systems to embodied intelligence research\./);
  assert.match(html, /Projects &amp; Technology Stack/);
  assert.match(html, /Stages &amp; Projects/);
  assert.match(html, /Robocon Autonomous Robot System/);
  assert.match(html, /Switch to Chinese/);
  assert.match(html, /mailto:wang2003@engineering\.upenn\.edu/);
  assert.doesNotMatch(html, /Wang2003@seas\.upenn\.edu/i);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/sansenpai\//);
  assert.doesNotMatch(html, /招聘者先看到|赛索德|Synthoid|\bFOC\b/);
});

test("renders English supporting pages", async () => {
  const [journey, projects] = await Promise.all([
    render("/journey"),
    render("/projects"),
  ]);

  assert.equal(journey.status, 200);
  assert.equal(projects.status, 200);
  assert.match(await journey.text(), /Growth has not been linear/);
  assert.match(await projects.text(), /Projects &amp; Technology Stack/);
});
