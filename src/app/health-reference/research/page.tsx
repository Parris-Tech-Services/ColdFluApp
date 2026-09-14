import type { Metadata } from "next";
import Link from "next/link";
import { ResearchLearningBrowser } from "@/components/research-learning-browser";
import { getPublicResearchItems } from "@/lib/public-research-library";

export const metadata: Metadata = {
  title: "Research Explorer",
  description: "Search, open and study the public research artefacts behind Health Reference.",
};

export const dynamic = "force-static";

export default async function ResearchExplorerPage() {
  const items = await getPublicResearchItems();
  const collections = new Set(items.map((item) => item.collection)).size;
  const topics = new Set(items.map((item) => item.topic)).size;

  return (
    <>
      <p className="eyebrow">Health Reference · research explorer</p>
      <p><Link href="/health-reference">← Back to Health Reference hub</Link></p>
      <h1>Open the research behind the app</h1>
      <p className="lede">
        Health knowledge should not disappear into repository folders. This explorer turns the public research backend into a browsable learning library.
      </p>

      <section className="draft-banner" aria-label="Research status warning">
        <strong>Research material is not automatically medical advice.</strong>
        <span>
          Drafts and external agent returns are shown so you can inspect how the evidence base is being built. Their status stays visible, and unverified material is not presented as a reviewed clinical conclusion.
        </span>
      </section>

      <section className="card-grid" aria-label="Research library summary">
        <article className="card"><h2>{items.length}</h2><p>viewable research artefacts</p></article>
        <article className="card"><h2>{topics}</h2><p>topics and programme areas</p></article>
        <article className="card"><h2>{collections}</h2><p>backend collections</p></article>
      </section>

      <ResearchLearningBrowser items={items} />
    </>
  );
}
