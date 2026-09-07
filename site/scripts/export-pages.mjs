import { cp, mkdir, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "pages-dist");
const workerUrl = pathToFileURL(resolve(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", String(Date.now()));

const { default: worker } = await import(workerUrl.href);

await rm(output, { recursive: true, force: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });
await rename(resolve(output, "profile/_next"), resolve(output, "_next"));
await rm(resolve(output, "profile"), { recursive: true, force: true });

const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const pages = [
  ["/profile/", "index.html"],
  ["/profile/journey/", "journey/index.html"],
  ["/profile/projects/", "projects/index.html"],
];

for (const [pathname, filename] of pages) {
  const response = await worker.fetch(
    new Request(`https://oldkingzz.github.io${pathname}`, {
      headers: {
        accept: "text/html",
        host: "oldkingzz.github.io",
        "x-forwarded-host": "oldkingzz.github.io",
        "x-forwarded-proto": "https",
      },
    }),
    env,
    executionContext,
  );

  if (!response.ok) {
    throw new Error(`Could not render ${pathname}: HTTP ${response.status}`);
  }

  const target = resolve(output, filename);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, await response.text());
}

await writeFile(resolve(output, ".nojekyll"), "");
await writeFile(
  resolve(output, "404.html"),
  '<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/profile/"><title>Vincent Wang</title>',
);
