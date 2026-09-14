import test from "node:test";
import assert from "node:assert/strict";
import { getPublicResearchItem, getPublicResearchItems } from "../src/lib/public-research-library";

test("public research explorer indexes the health research backend", async () => {
  const items = await getPublicResearchItems();
  assert.ok(items.length > 20);
  assert.ok(items.some((item) => item.path.startsWith("content/research/")));
  assert.ok(items.some((item) => item.path.startsWith("inputs/imported-research/")));
  assert.ok(items.some((item) => item.path.startsWith("inputs/chatgpt-health-topic-history/")));
  assert.ok(items.some((item) => item.path === "docs/HEALTH_TOPIC_MASTER_ROADMAP.md"));
});

test("public research explorer excludes sensitive staging paths", async () => {
  const items = await getPublicResearchItems();
  for (const item of items) {
    assert.doesNotMatch(item.path.toLowerCase(), /(^|\/)(do-not-commit|personal|private|secrets)(\/|$)/);
    assert.doesNotMatch(item.path.toLowerCase(), /(^|\/)\.env/);
    assert.match(item.href, /^\/health-reference\/research\/view\//);
  }
});

test("research file lookup only resolves indexed artefacts", async () => {
  const expected = "docs/HEALTH_TOPIC_MASTER_ROADMAP.md";
  const found = await getPublicResearchItem(expected.split("/"));
  assert.equal(found?.path, expected);
  assert.equal(await getPublicResearchItem(["..", ".env"]), null);
});
