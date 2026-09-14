import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownDocument } from "@/components/markdown-document";
import { ResearchJsonDocument } from "@/components/research-json-document";
import { StudyCompletionButton } from "@/components/study-completion-button";
import { getPublicResearchItem, getPublicResearchItems, readPublicResearchItem } from "@/lib/public-research-library";

type PageProps = { params: Promise<{ path: string[] }> };

export const dynamic = "force-static";

export async function generateStaticParams() {
  const items = await getPublicResearchItems();
  return items.map((item) => ({ path: item.path.split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path } = await params;
  const item = await getPublicResearchItem(path);
  if (!item) return {};
  return {
    title: `${item.title} · Research Explorer`,
    description: `View ${item.title} from the ${item.collection} research backend.`,
  };
}

export default async function ResearchFilePage({ params }: PageProps) {
  const { path } = await params;
  const item = await getPublicResearchItem(path);
  if (!item) notFound();
  const source = await readPublicResearchItem(item);

  let content;
  if (item.format === "markdown") {
    content = <MarkdownDocument source={source} />;
  } else if (item.format === "json") {
    try {
      content = <ResearchJsonDocument value={JSON.parse(source) as unknown} />;
    } catch {
      content = <pre className="research-raw"><code>{source}</code></pre>;
    }
  } else {
    content = <pre className="research-raw"><code>{source}</code></pre>;
  }

  const githubUrl = `https://github.com/joshualparris/ColdFluApp/blob/main/${item.path.split("/").map(encodeURIComponent).join("/")}`;

  return (
    <>
      <p className="eyebrow">Research Explorer · {item.collection}</p>
      <p><Link href="/health-reference/research">← Back to Research Explorer</Link></p>
      <h1>{item.title}</h1>
      <div className="research-file-meta">
        <span className="badge">Topic: {item.topic}</span>
        <span className="badge">Format: {item.format}</span>
        <span className="badge">Status: {item.status}</span>
      </div>

      {item.status === "unverified external return" ? (
        <section className="draft-banner" aria-label="Unverified research warning">
          <strong>Unverified external research return</strong>
          <span>This material is visible for evidence inspection and learning. It has not passed the independent evidence, clinical and editorial review gates required for medical guidance.</span>
        </section>
      ) : item.status === "research draft" ? (
        <section className="notice">
          <strong>Research-stage material.</strong> File presence and detail do not mean a claim has been approved for clinical publication.
        </section>
      ) : null}

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2>Study this artefact</h2>
        <p>Read it, follow any source links, compare it with related material, then mark it studied on this device.</p>
        <div className="research-actions">
          <StudyCompletionButton id={item.id} />
          <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">View original on GitHub</a>
        </div>
      </section>

      {content}
    </>
  );
}
