import Link from "next/link";
import type { ReactNode } from "react";

const docRoutes: Record<string, string> = {
  "HEALTH_TOPIC_MASTER_ROADMAP.md": "/health-reference/roadmap",
  "PERSISTENT_COUGH_GUIDE.md": "/health-reference/cough",
  "HEALTH_RESOURCE_LIBRARY.md": "/health-reference/resources",
  "HEALTH_LEARNING_QUIZZES.md": "/health-reference/quizzes",
  "HEALTH_APP_ECOSYSTEM.md": "/health-reference/apps",
  "REPO_HARDENING_TODO.md": "/health-reference/hardening",
};

function researchHref(repoPath: string) {
  return `/health-reference/research/view/${repoPath.split("/").map(encodeURIComponent).join("/")}`;
}

function resolveRelative(basePath: string, href: string) {
  const stack = basePath.split("/").filter(Boolean);
  for (const part of href.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") stack.pop();
    else stack.push(part);
  }
  return stack.join("/");
}

function normaliseHref(href: string, basePath?: string) {
  const [hrefWithoutHash, hash = ""] = href.split("#", 2);
  const hashSuffix = hash ? `#${hash}` : "";

  if (docRoutes[hrefWithoutHash]) return `${docRoutes[hrefWithoutHash]}${hashSuffix}`;
  if (hrefWithoutHash.startsWith("./") && docRoutes[hrefWithoutHash.slice(2)]) return `${docRoutes[hrefWithoutHash.slice(2)]}${hashSuffix}`;
  if (/^https?:\/\//i.test(href)) return href;
  if (href.startsWith("/")) return href;
  if (href.startsWith("#")) return href;

  const directRepoPath = /^(content|inputs|docs)\//.test(hrefWithoutHash) ? hrefWithoutHash : null;
  const resolved = directRepoPath ?? resolveRelative(basePath ?? "docs", hrefWithoutHash);
  if (/^(content|inputs|docs)\//.test(resolved)) return `${researchHref(resolved)}${hashSuffix}`;

  return `https://github.com/joshualparris/ColdFluApp/blob/main/${resolved}${hashSuffix}`;
}

function inline(text: string, keyPrefix: string, basePath?: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const token = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|<https?:\/\/[^>]+>)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = token.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const value = match[0];
    const key = `${keyPrefix}-${index++}`;

    const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(value);
    if (linkMatch) {
      const href = normaliseHref(linkMatch[2], basePath);
      if (/^https?:\/\//i.test(href)) {
        nodes.push(<a key={key} href={href} target="_blank" rel="noreferrer">{linkMatch[1]}</a>);
      } else {
        nodes.push(<Link key={key} href={href}>{linkMatch[1]}</Link>);
      }
    } else if (value.startsWith("**")) {
      nodes.push(<strong key={key}>{value.slice(2, -2)}</strong>);
    } else if (value.startsWith("`")) {
      nodes.push(<code key={key}>{value.slice(1, -1)}</code>);
    } else if (value.startsWith("<http")) {
      const href = value.slice(1, -1);
      nodes.push(<a key={key} href={href} target="_blank" rel="noreferrer">{href}</a>);
    }

    last = match.index + value.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function isTableSeparator(line: string) {
  return /^\s*\|?\s*:?-{3,}/.test(line) && line.includes("|");
}

function cells(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

export function MarkdownDocument({ source, basePath }: { source: string; basePath?: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const output: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1;
      output.push(<pre key={`code-${key++}`} className="doc-code"><code>{code.join("\n")}</code></pre>);
      continue;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const content = inline(heading[2], `h-${key}`, basePath);
      if (level === 1) output.push(<h1 key={`h-${key++}`}>{content}</h1>);
      else if (level === 2) output.push(<h2 key={`h-${key++}`}>{content}</h2>);
      else if (level === 3) output.push(<h3 key={`h-${key++}`}>{content}</h3>);
      else output.push(<h4 key={`h-${key++}`}>{content}</h4>);
      i += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      output.push(<hr key={`hr-${key++}`} />);
      i += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      output.push(<blockquote key={`q-${key++}`}>{quote.map((item, qIndex) => <p key={qIndex}>{inline(item, `q-${key}-${qIndex}`, basePath)}</p>)}</blockquote>);
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const header = cells(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(cells(lines[i]));
        i += 1;
      }
      output.push(
        <div className="table-scroll" key={`table-${key++}`}>
          <table>
            <thead><tr>{header.map((cell, c) => <th key={c}>{inline(cell, `th-${key}-${c}`, basePath)}</th>)}</tr></thead>
            <tbody>{rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}>{inline(cell, `td-${key}-${r}-${c}`, basePath)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i += 1;
      }
      output.push(
        <ul key={`ul-${key++}`}>
          {items.map((item, itemIndex) => {
            const task = /^\[( |x|X)\]\s+(.+)$/.exec(item);
            return <li key={itemIndex}>{task ? <><span aria-hidden="true">{task[1].trim() ? "☑" : "☐"} </span>{inline(task[2], `li-${key}-${itemIndex}`, basePath)}</> : inline(item, `li-${key}-${itemIndex}`, basePath)}</li>;
          })}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      output.push(<ol key={`ol-${key++}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{inline(item, `oli-${key}-${itemIndex}`, basePath)}</li>)}</ol>);
      continue;
    }

    if (trimmed.startsWith("<details") || trimmed.startsWith("</details") || trimmed.startsWith("<summary") || trimmed.startsWith("</summary")) {
      const summary = /<summary>(.*?)<\/summary>/.exec(trimmed);
      if (summary) output.push(<h4 key={`details-${key++}`}>{summary[1]}</h4>);
      i += 1;
      continue;
    }

    const paragraph: string[] = [trimmed];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !/^---+$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("```") &&
      !(lines[i].includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) &&
      !lines[i].trim().startsWith("<details") &&
      !lines[i].trim().startsWith("</details") &&
      !lines[i].trim().startsWith("<summary") &&
      !lines[i].trim().startsWith("</summary")
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    output.push(<p key={`p-${key++}`}>{inline(paragraph.join(" "), `p-${key}`, basePath)}</p>);
  }

  return <article className="markdown-doc">{output}</article>;
}
