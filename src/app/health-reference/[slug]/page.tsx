import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownDocument } from "@/components/markdown-document";

const docs = {
  roadmap: {
    file: "HEALTH_TOPIC_MASTER_ROADMAP.md",
    title: "Health topic master roadmap",
    description: "Every current and planned health topic, with priority and coverage status.",
  },
  resources: {
    file: "HEALTH_RESOURCE_LIBRARY.md",
    title: "Health learning resource library",
    description: "Curated Australian-first podcasts, videos, guidelines, studies and reference material.",
  },
  quizzes: {
    file: "HEALTH_LEARNING_QUIZZES.md",
    title: "Health learning quizzes",
    description: "Source-linked learning checks across first aid, family health, medicines, heart, sleep and more.",
  },
  apps: {
    file: "HEALTH_APP_ECOSYSTEM.md",
    title: "Health app ecosystem",
    description: "How Health Reference, HealthLens, HeartCalm and related tools fit together safely.",
  },
  hardening: {
    file: "REPO_HARDENING_TODO.md",
    title: "Repository hardening backlog",
    description: "Engineering and governance work needed as the project expands into higher-risk health domains.",
  },
} as const;

type DocSlug = keyof typeof docs;

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = docs[slug as DocSlug];
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function HealthReferenceDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docs[slug as DocSlug];
  if (!doc) notFound();

  const source = await readFile(path.join(process.cwd(), "docs", doc.file), "utf8");

  return (
    <>
      <p className="eyebrow">Health Reference · living programme</p>
      <p><Link href="/health-reference">← Back to Health Reference hub</Link></p>
      <section className="notice">
        <strong>Planning and learning layer — not automatically reviewed medical advice.</strong>
        <p>{doc.description} Clinical claims still require the repository&apos;s evidence, clinical and editorial review gates.</p>
      </section>
      <MarkdownDocument source={source} />
    </>
  );
}
