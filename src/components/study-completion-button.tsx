"use client";

import { useEffect, useState } from "react";

const progressKey = "health-reference-research-progress-v1";

function load(): Set<string> {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(progressKey) ?? "[]") as unknown;
    return new Set(Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === "string") : []);
  } catch {
    return new Set();
  }
}

export function StudyCompletionButton({ id }: { id: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(load().has(id));
  }, [id]);

  function toggle() {
    const current = load();
    if (current.has(id)) current.delete(id);
    else current.add(id);
    window.localStorage.setItem(progressKey, JSON.stringify(Array.from(current)));
    setDone(current.has(id));
  }

  return (
    <button type="button" className="button button-secondary" onClick={toggle} aria-pressed={done}>
      {done ? "✓ Marked studied" : "Mark this artefact studied"}
    </button>
  );
}
