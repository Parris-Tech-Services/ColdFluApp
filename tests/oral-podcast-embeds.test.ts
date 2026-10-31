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

test("all three mouth-ulcer episodes have in-page native audio sources alongside publisher embeds", async () => {
  const source = await readFile("src/app/listen/page.tsx", "utf8");
  assert.equal((source.match(/audio: "https:\/\//g) ?? []).length, 3);
  assert.match(source, /<audio controls preload="none"/);
  assert.match(source, /<source src=\{episode\.audio\} type="audio\/mpeg"/);
  assert.match(source, /traffic\.omny\.fm\/d\/clips\//);
  assert.match(source, /cdn\.vivarep\.com\/contrib\/va\/podcast\//);
  assert.match(source, /<details/);
});
