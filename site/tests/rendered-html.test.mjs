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

test("renders the job-search portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Vincent Wang 王泽森 · Robotics &amp; Research<\/title>/);
  assert.match(html, /项目与技术栈/);
  assert.match(html, /阶段与项目/);
  assert.match(html, /Robocon 自主机器人系统/);
  assert.match(html, /C\/C\+\+/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/sansenpai\//);
  assert.doesNotMatch(html, /招聘者先看到|赛索德|Synthoid|\bFOC\b/);
});

test("renders the supporting pages", async () => {
  const [journey, projects] = await Promise.all([
    render("/journey/"),
    render("/projects/"),
  ]);

  assert.equal(journey.status, 200);
  assert.equal(projects.status, 200);
  assert.match(await journey.text(), /成长路径/);
  assert.match(await projects.text(), /项目与技术栈/);
});
