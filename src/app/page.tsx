import Image from "next/image";
import Link from "next/link";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";
import { getModuleVisual } from "@/lib/content/module-visuals";

export default async function Home() {
  const published = publicModules(await getCanonicalModules());
  return (
    <>
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <p className="eyebrow">Australian-first · evidence governance</p>
        <h1>Health Reference</h1>
        <p className="lede">
          A broad health research and learning base for households, carers, first aiders and health workers. Cold, flu and respiratory health remain the first controlled clinical-content collection.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/health-reference" className="button">Open Health Reference</Link>
        </p>
      </section>

      <section className="card-grid" style={{ marginTop: "1.5rem" }}>
        <article className="card">
          <h2><Link href="/health-reference/roadmap">What health topics are covered?</Link></h2>
          <p>See the full roadmap: first aid, child health, medicines, heart, sleep, exercise, nutrition, mental health, neurodivergence, pregnancy, aged care, workplace health and more.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/resources">Listen, watch and read</Link></h2>
          <p>Open curated podcasts, videos, Australian guidelines, trusted references and deeper research.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/research">Explore the research backend</Link></h2>
          <p>Search research packages, source maps, evidence gaps, structured data and external research returns, then mark material as studied.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/quizzes">Health learning quizzes</Link></h2>
          <p>Test what you know across first aid, medicines, kids, sleep, heart health, nutrition, nursing and other topics.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/apps">Health app ecosystem</Link></h2>
          <p>See where HealthLens and HeartCalm fit, and why personal health data stays separate from this public reference.</p>
        </article>
      </section>

      {published.length > 0 ? (
        <section style={{ marginTop: "2rem" }}>
          <h2>Published health modules</h2>
          <div className="card-grid">
            {published.map((module) => {
              const visual = getModuleVisual(module.slug);
              return (
                <article className="card" key={module.slug}>
                  <Image src={visual.src} alt={visual.alt} className="module-card-image" width={800} height={480} />
                  <h3><Link href={`/modules/${module.slug}`}>{module.title}</Link></h3>
                  <p>{module.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="notice">
          <h2>No medical modules are published</h2>
          <p>
            The broader roadmap, learning resources, research explorer and quizzes are visible now, but no medical module is labelled published until claim-level source verification and independent evidence, clinical and editorial review are complete.
          </p>
        </section>
      )}

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Evidence and policy</h2>
        <p>
          <Link href="/health-reference/research">Research Explorer</Link> · <Link href="/modules">Modules</Link> · <Link href="/sources">Sources</Link> · <Link href="/about/methodology">How evidence is reviewed</Link> · <Link href="/about/accessibility">Accessibility</Link> · <Link href="/about/privacy">Privacy</Link> · <Link href="/about/transparency">Transparency</Link> · <Link href="/about/corrections">Corrections</Link>
        </p>
      </section>
    </>
  );
}
