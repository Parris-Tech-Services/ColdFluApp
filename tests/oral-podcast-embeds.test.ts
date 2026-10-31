import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("mouth ulcer listening page has three distinct embedded publisher players", async () => {
  const source = await readFile("src/app/listen/page.tsx", "utf8");
  assert.equal((source.match(/embed: "https:\/\//g) ?? []).length, 3);
  assert.match(source, /omny\.fm\/shows\/spot-diagnosis\/s04-e06-oral-mucosal-diseases-part-one\/embed/);
  assert.match(source, /omny\.fm\/shows\/spot-diagnosis\/s04-e07-oral-mucosal-diseases-part-two\/embed/);
  assert.match(source, /youtube-nocookie\.com\/embed\/x2rUpHx0Lr4/);
  assert.match(source, /<iframe/);
  assert.match(source, /title=\{\x60Play/);
  assert.match(source, /Educational media, not individual medical advice/);
});
