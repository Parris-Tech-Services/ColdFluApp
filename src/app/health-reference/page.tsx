import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Reference",
  description: "Australian-first health research roadmap, learning resources, quizzes and linked health tools.",
};

const collections = [
  ["Urgent & First Aid", "CPR, AED, choking, bleeding, burns, asthma, anaphylaxis, heart attack, stroke, seizures, poisoning, heat/cold and bites/stings."],
  ["Cold, Flu & Respiratory", "Cough, sore throat, fever, congestion, respiratory infections, asthma/COPD, antivirals, prevention and triage."],
  ["Kids & Family Health", "Fever, medicines, respiratory illness, gastro/dehydration, ears, rashes, safe sleep, immunisation and development."],
  ["Medicines & Pharmacy", "Active ingredients, OTC medicines, interactions, pregnancy/child/older-person cautions, antibiotics, antivirals and TGA safety."],
  ["Heart, Sleep & Recovery", "Palpitations, blood pressure, cardiac tests, sleep, sleep apnoea, exercise, HRV and wearables."],
  ["Food, Nutrition & Gut Health", "Australian dietary guidance, dairy-free adequacy, micronutrients, hydration, fibre, food safety, gut health and supplements."],
  ["Mental Health & Neurodivergence", "Anxiety, depression, stress, ADHD, autism/AuDHD, burnout, regulation, sleep and support pathways."],
  ["Pregnancy, Breastfeeding & Women’s Health", "Medicines, vaccination, nutrition, postpartum health, breastfeeding, periods, menopause and screening."],
  ["Older People, Aged Care & Nursing", "Deterioration, delirium, falls, infection control, medicines, wounds, dementia, hydration, palliative care and governance."],
  ["Workplace & Environmental Health", "First-aid systems, WHS, mould, air quality, heat, noise, ergonomics, biological hazards, PPE and chemical exposure."],
  ["Prevention & Healthy Ageing", "Vaccination, cardiovascular and metabolic prevention, cancer screening, smoking/alcohol, sun, oral health and healthy ageing."],
  ["Digital Health & Evidence Literacy", "Wearables, HRV, sleep metrics, Health Connect, pathology data, privacy, AI-health literacy and reading research."],
] as const;

export default function HealthReferenceHub() {
  return (
    <>
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <p className="eyebrow">Australian-first · broad health programme</p>
        <h1>Health Reference</h1>
        <p className="lede">
          The original cold-and-flu research base is growing into a broad health reference for households, carers, first aiders and health workers.
        </p>
        <div className="notice">
          <strong>Important:</strong> the roadmap and learning library are not the same thing as clinically reviewed advice. Published medical claims still require source verification and independent review.
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h2><Link href="/health-reference/roadmap">Master health roadmap</Link></h2>
          <p>See what the repo covers now, what is missing, and the P0/P1/P2 research priority for each health domain.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/resources">Listen, watch & read</Link></h2>
          <p>Open curated Australian-first podcasts, videos, clinical guidelines, research papers and trusted reference sites.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/research">Research Explorer</Link></h2>
          <p>Search the public backend, open research packages and source maps, inspect JSON and Markdown, follow links and track what you have studied.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/quizzes">Health quizzes</Link></h2>
          <p>Use source-linked knowledge checks across first aid, child health, medicines, heart, sleep, nutrition and more.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/apps">Linked health apps</Link></h2>
          <p>See how Health Reference connects with HealthLens and HeartCalm while keeping personal health data separate.</p>
        </article>
        <article className="card">
          <h2><Link href="/health-reference/hardening">Safety & engineering backlog</Link></h2>
          <p>Track repository hardening, source-verification, schema, governance and dependency work.</p>
        </article>
        <article className="card">
          <h2><Link href="/modules">Reviewed-content pipeline</Link></h2>
          <p>Browse canonical modules and see which health content has actually progressed through the publication workflow.</p>
        </article>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Planned health collections</h2>
        <div className="card-grid">
          {collections.map(([title, description]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="notice">
        <h2>Companion tools</h2>
        <p>
          <a href="https://health-lens-rust.vercel.app" target="_blank" rel="noreferrer">HealthLens</a> handles private personal health-data analysis. {" "}
          <a href="https://heart-calm-vert.vercel.app" target="_blank" rel="noreferrer">HeartCalm</a> supports calm/palpitation episode logging and escalation guardrails.
        </p>
      </section>
    </>
  );
}
