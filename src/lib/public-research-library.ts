import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type PublicResearchItem = {
  id: string;
  path: string;
  href: string;
  title: string;
  topic: string;
  collection: string;
  format: "markdown" | "json" | "text";
  status: "reviewed pipeline" | "research draft" | "unverified external return" | "programme document";
};

type RootDefinition = {
  directory: string;
  collection: string;
  status: PublicResearchItem["status"];
  include?: (relativePath: string) => boolean;
};

const programmeDocs = new Set([
  "ASSIGNMENTS.md",
  "EVIDENCE_GAP_REGISTER.md",
  "HEALTH_APP_ECOSYSTEM.md",
  "HEALTH_LEARNING_QUIZZES.md",
  "HEALTH_RESOURCE_LIBRARY.md",
  "HEALTH_TOPIC_MASTER_ROADMAP.md",
  "REPO_HARDENING_TODO.md",
  "SOURCE_REGISTER.md",
  "SOURCE_REGISTER_DRAFT.md",
]);

const roots: RootDefinition[] = [
  { directory: "content/modules", collection: "Canonical modules", status: "reviewed pipeline" },
  { directory: "content/research", collection: "Research packages", status: "research draft" },
  { directory: "content/sources", collection: "Source records", status: "research draft" },
  { directory: "inputs/agent-returns", collection: "External research returns", status: "unverified external return" },
  {
    directory: "docs",
    collection: "Programme documents",
    status: "programme document",
    include: (relativePath) => programmeDocs.has(relativePath),
  },
];

const extensionToFormat = new Map<string, PublicResearchItem["format"]>([
  [".md", "markdown"],
  [".json", "json"],
  [".txt", "text"],
]);

const blockedSegments = new Set(["DO-NOT-COMMIT", "personal", "private", "secrets"]);

function humanise(value: string) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function topicFor(filePath: string, root: RootDefinition) {
  const relative = path.posix.relative(root.directory, filePath);
  const parts = relative.split("/");
  if (root.directory === "docs") return "Programme";
  if (parts.length > 1) return humanise(parts[0]);
  return humanise(path.posix.basename(filePath, path.posix.extname(filePath)));
}

function toHref(filePath: string) {
  return `/health-reference/research/view/${filePath.split("/").map(encodeURIComponent).join("/")}`;
}

function isBlocked(filePath: string) {
  return filePath.split("/").some((segment) => blockedSegments.has(segment));
}

async function walk(directory: string): Promise<string[]> {
  const absolute = path.join(process.cwd(), directory);
  let entries;
  try {
    entries = await readdir(absolute, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }

  const files: string[] = [];
  for (const entry of entries) {
    const relative = path.posix.join(directory, entry.name);
    if (isBlocked(relative)) continue;
    if (entry.isDirectory()) files.push(...(await walk(relative)));
    else files.push(relative);
  }
  return files;
}

export async function getPublicResearchItems(): Promise<PublicResearchItem[]> {
  const items: PublicResearchItem[] = [];

  for (const root of roots) {
    const files = await walk(root.directory);
    for (const filePath of files) {
      const extension = path.posix.extname(filePath).toLowerCase();
      const format = extensionToFormat.get(extension);
      if (!format) continue;
      const relative = path.posix.relative(root.directory, filePath);
      if (root.include && !root.include(relative)) continue;

      items.push({
        id: filePath,
        path: filePath,
        href: toHref(filePath),
        title: humanise(path.posix.basename(filePath)),
        topic: topicFor(filePath, root),
        collection: root.collection,
        format,
        status: root.status,
      });
    }
  }

  return items.sort((a, b) =>
    a.topic.localeCompare(b.topic) || a.collection.localeCompare(b.collection) || a.title.localeCompare(b.title),
  );
}

export async function getPublicResearchItem(routeParts: string[]) {
  const requested = routeParts.map(decodeURIComponent).join("/");
  const items = await getPublicResearchItems();
  return items.find((item) => item.path === requested) ?? null;
}

export async function readPublicResearchItem(item: PublicResearchItem) {
  return readFile(path.join(process.cwd(), item.path), "utf8");
}
