"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { PublicResearchItem } from "@/lib/public-research-library";

const progressKey = "health-reference-research-progress-v1";

function readProgress() {
  if (typeof window === "undefined") return new Set<string>();
  try {
    const parsed = JSON.parse(window.localStorage.getItem(progressKey) ?? "[]") as unknown;
    if (!Array.isArray(parsed)) return new Set<string>();
    return new Set(parsed.filter((value): value is string => typeof value === "string"));
  } catch {
    return new Set<string>();
  }
}

export function ResearchLearningBrowser({ items }: { items: PublicResearchItem[] }) {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState("all");
  const [topic, setTopic] = useState("all");
  const [studied, setStudied] = useState<Set<string>>(new Set());

  useEffect(() => {
    setStudied(readProgress());
  }, []);

  const collections = useMemo(() => Array.from(new Set(items.map((item) => item.collection))).sort(), [items]);
  const topics = useMemo(() => Array.from(new Set(items.map((item) => item.topic))).sort(), [items]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((item) => {
      if (collection !== "all" && item.collection !== collection) return false;
      if (topic !== "all" && item.topic !== topic) return false;
      if (!needle) return true;
      return `${item.title} ${item.topic} ${item.collection} ${item.path} ${item.status}`.toLowerCase().includes(needle);
    });
  }, [collection, items, query, topic]);

  function toggleStudied(id: string) {
    setStudied((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      window.localStorage.setItem(progressKey, JSON.stringify(Array.from(next)));
      return next;
    });
  }

  const studiedVisible = visible.filter((item) => studied.has(item.id)).length;
  const percent = visible.length === 0 ? 0 : Math.round((studiedVisible / visible.length) * 100);

  return (
    <>
      <section className="card" aria-labelledby="research-tools">
        <h2 id="research-tools">Explore and learn</h2>
        <p>
          Search every public health-research artefact, filter by topic or collection, open the underlying file in a readable view, and mark material as studied on this device.
        </p>
        <div className="research-tools">
          <label>
            Search
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try cough, children, blood pressure…"
            />
          </label>
          <label>
            Collection
            <select value={collection} onChange={(event) => setCollection(event.target.value)}>
              <option value="all">All collections</option>
              {collections.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label>
            Topic
            <select value={topic} onChange={(event) => setTopic(event.target.value)}>
              <option value="all">All topics</option>
              {topics.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </div>
        <div className="study-progress" aria-live="polite">
          <strong>{studiedVisible} of {visible.length}</strong> visible artefacts marked studied ({percent}%).
        </div>
      </section>

      <p aria-live="polite"><strong>{visible.length}</strong> artefact{visible.length === 1 ? "" : "s"} shown.</p>

      <div className="research-grid">
        {visible.map((item) => {
          const done = studied.has(item.id);
          return (
            <article className="card research-card" key={item.id}>
              <p className="eyebrow">{item.collection} · {item.format}</p>
              <h2><Link href={item.href}>{item.title}</Link></h2>
              <p><strong>Topic:</strong> {item.topic}</p>
              <p><span className={`research-status research-status-${item.status.replaceAll(" ", "-")}`}>{item.status}</span></p>
              <p className="research-path"><code>{item.path}</code></p>
              <div className="research-actions">
                <Link className="button" href={item.href}>Open and study</Link>
                <button type="button" className="button button-secondary" onClick={() => toggleStudied(item.id)} aria-pressed={done}>
                  {done ? "✓ Studied" : "Mark studied"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {visible.length === 0 ? <p className="notice">No research artefacts match those filters.</p> : null}
    </>
  );
}
