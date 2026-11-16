import type { ReactNode } from "react";

function isUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

function scalar(value: unknown): ReactNode {
  if (typeof value === "string") {
    if (isUrl(value)) return <a href={value} target="_blank" rel="noreferrer">{value}</a>;
    return value;
  }
  if (value === null) return <em>null</em>;
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  return String(value);
}

function JsonNode({ value, label, depth = 0 }: { value: unknown; label?: string; depth?: number }) {
  if (Array.isArray(value)) {
    return (
      <details open={depth < 1}>
        <summary>{label ? `${label} · ` : ""}{value.length} item{value.length === 1 ? "" : "s"}</summary>
        <div className="research-json">
          {value.map((entry, index) => <JsonNode key={index} value={entry} label={`Item ${index + 1}`} depth={depth + 1} />)}
        </div>
      </details>
    );
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    const simple = entries.filter(([, entry]) => entry === null || ["string", "number", "boolean"].includes(typeof entry));
    const nested = entries.filter(([, entry]) => !(entry === null || ["string", "number", "boolean"].includes(typeof entry)));
    return (
      <details open={depth < 1}>
        <summary>{label ?? "Object"} · {entries.length} field{entries.length === 1 ? "" : "s"}</summary>
        {simple.length > 0 ? (
          <dl>
            {simple.map(([key, entry]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{scalar(entry)}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {nested.length > 0 ? (
          <div className="research-json">
            {nested.map(([key, entry]) => <JsonNode key={key} value={entry} label={key} depth={depth + 1} />)}
          </div>
        ) : null}
      </details>
    );
  }

  return <p><strong>{label ? `${label}: ` : ""}</strong>{scalar(value)}</p>;
}

export function ResearchJsonDocument({ value }: { value: unknown }) {
  return <div className="research-json"><JsonNode value={value} /></div>;
}
