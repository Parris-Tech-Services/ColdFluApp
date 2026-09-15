import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avance NSW WHS & First Aid",
  description:
    "Current Avance NSW workplace health and safety, first aid, emergency, workers compensation and recovery-at-work reference for September 2026.",
};

const officialSources = [
  ["SafeWork NSW — legislation", "https://www.safework.nsw.gov.au/legal-obligations/legislation"],
  ["SafeWork NSW — Codes of Practice", "https://www.safework.nsw.gov.au/resource-library/codes-of-practice"],
  ["SafeWork NSW — first aid in the workplace", "https://www.safework.nsw.gov.au/safety-starts-here/safety-overview/first-aid-in-the-workplace"],
  ["SIRA — return to work programs", "https://www.sira.nsw.gov.au/workers-compensation/recovery-after-a-workplace-injury/return-to-work-programs"],
  ["SIRA — workers compensation guide for employers", "https://www.sira.nsw.gov.au/resources-library/workers-compensation-resources/publications/workers-compensation-policies/workers-compensation-guide-for-employers"],
  ["icare — workplace injuries", "https://www.icare.nsw.gov.au/injured-or-ill-people/workplace-injuries"],
] as const;

export default function WorkplaceWhsPage() {
  return (
    <>
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <p className="eyebrow">NSW workplace health · current to 14 September 2026</p>
        <h1>Avance WHS, First Aid & Recovery at Work</h1>
        <p className="lede">
          Operational reference for System State IT Pty Ltd trading as Avance Business Technology in NSW. It brings together the known emergency, first-aid, workers-compensation and recovery-at-work arrangements in one place.
        </p>
        <div className="notice">
          <strong>Important:</strong> documents do not create compliance by themselves. Avance still needs implementation evidence such as consultation records, risk controls, first-aid checks and emergency testing. Building-wide landlord evacuation arrangements are still to be confirmed.
        </div>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/health-reference">← Back to Health Reference</Link>
        </p>
      </section>

      <section className="card-grid">
        <article className="card">
          <h2>Business</h2>
          <p><strong>Legal entity:</strong> System State IT Pty Ltd trading as Avance Business Technology</p>
          <p><strong>ABN:</strong> 19 621 910 950</p>
          <p><strong>NSW office:</strong> 10/36 Darling Street, Dubbo NSW 2830</p>
          <p><strong>Known NSW staff:</strong> 3</p>
          <p><strong>Contact:</strong> (02) 6837 1555 / 1800 AVANCE</p>
        </article>

        <article className="card">
          <h2>Emergency roles</h2>
          <p><strong>Emergency Coordinator / Fire Warden:</strong> Andrew Johnston, Managing Director; if absent, senior worker present.</p>
          <p><strong>First Aid Officer:</strong> Joshua Parris.</p>
          <p><strong>First aid kit:</strong> Kitchen.</p>
          <p><strong>Assembly point:</strong> Car Compound.</p>
          <p><strong>Emergency:</strong> 000 · <strong>SafeWork notifiable incidents:</strong> 13 10 50.</p>
        </article>

        <article className="card">
          <h2>Emergency testing</h2>
          <p><strong>Last drill:</strong> none conducted or recorded as at 14 September 2026.</p>
          <p><strong>Next action:</strong> schedule, conduct and document the initial evacuation/emergency-procedure test, including issues found and corrective actions.</p>
          <p><strong>Still to confirm:</strong> landlord/building evacuation diagram, exits and any building-wide warden arrangement.</p>
        </article>

        <article className="card">
          <h2>Workers compensation</h2>
          <p><strong>Category:</strong> Category 2, based on the known circumstances of a 3-person business insured through icare.</p>
          <p><strong>Insurer:</strong> icare Workers Insurance / NSW Nominal Insurer.</p>
          <p><strong>Address:</strong> GPO Box 4052, Sydney NSW 2001.</p>
          <p><strong>Policy enquiries:</strong> 13 44 22.</p>
          <p><strong>Claim/CSP help:</strong> 13 77 22.</p>
          <p><strong>Recovery-at-work contact:</strong> Andrew Johnston.</p>
        </article>
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Current first-aid qualification</h2>
        <p>
          Joshua Parris completed the full nationally recognised <strong>HLTAID011 Provide First Aid</strong> course through Healthcorp Pty Ltd (RTO 91222), issued <strong>7 September 2026</strong>. The certificate itself is retained outside this public repository.
        </p>
        <div className="card-grid" style={{ marginTop: "1rem" }}>
          <article className="card">
            <h3>HLTAID009</h3>
            <p>Provide cardiopulmonary resuscitation</p>
            <p><strong>Renewal:</strong> 7 September 2027</p>
          </article>
          <article className="card">
            <h3>HLTAID010</h3>
            <p>Provide basic emergency life support</p>
            <p><strong>Renewal:</strong> 7 September 2029</p>
          </article>
          <article className="card">
            <h3>HLTAID011</h3>
            <p>Provide First Aid</p>
            <p><strong>Renewal:</strong> 7 September 2029</p>
          </article>
        </div>
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Emergency procedure</h2>
        <ol>
          <li>Raise the alarm using the building alarm or a clear verbal warning.</li>
          <li>Call <strong>000</strong> when required.</li>
          <li>Follow the Emergency Coordinator and evacuate by the nearest safe exit to the <strong>Car Compound</strong>.</li>
          <li>Account for workers and visitors and report anyone missing.</li>
          <li>Do not re-enter until authorised.</li>
          <li>For a medical emergency, the trained first aider provides first aid within their training and calls 000 when required.</li>
          <li>For fire, electrical or another immediate danger, do not take unsafe action. Isolate or evacuate and use emergency equipment only if trained and safe.</li>
        </ol>
      </section>

      <section className="card-grid" style={{ marginTop: "1.5rem" }}>
        <article className="card">
          <h2>Why Category 2?</h2>
          <p>SIRA treats an employer as Category 1 if it has a basic tariff premium over $50,000 a year, is self-insured, or is insured by a specialised insurer and has more than 20 employees.</p>
          <p>Avance has 3 known staff and is insured through icare, so the known circumstances are consistent with Category 2. Re-check if staffing, insurer or premium circumstances materially change.</p>
        </article>

        <article className="card">
          <h2>Injury reporting</h2>
          <ol>
            <li>Report a work-related injury or illness to Andrew Johnston or Joshua Parris as soon as practicable.</li>
            <li>Record it in the injury register whether or not a claim is made.</li>
            <li>Notify the insurer / Claims Service Provider within the required timeframe; current SIRA guidance states within 48 hours.</li>
            <li>Notify SafeWork NSW immediately for a death, serious injury/illness or dangerous incident and preserve the site where required.</li>
            <li>Support safe recovery at work and suitable duties where reasonably practicable.</li>
          </ol>
        </article>
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>2026 NSW legal baseline</h2>
        <ul>
          <li>Work Health and Safety Act 2011 (NSW).</li>
          <li>Work Health and Safety Regulation 2025 (NSW).</li>
          <li>From 1 July 2026, section 26A makes approved Codes of Practice the minimum performance standard unless an equivalent or higher WHS standard is achieved another way.</li>
          <li>Relevant Codes include first aid, consultation/cooperation/coordination, work environment and facilities, hazardous manual tasks and any other code relevant to the work actually performed.</li>
          <li>NSW employer obligations include an injury register, worker injury/claim information, a return-to-work program and a nominated recovery-at-work person for a Category 2 employer.</li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Implementation checklist</h2>
        <ul>
          <li><strong>Emergency drill:</strong> schedule and record the first drill.</li>
          <li><strong>Building emergency information:</strong> confirm landlord diagram, exits and building-wide warden arrangements.</li>
          <li><strong>Consultation:</strong> keep evidence of staff consultation on WHS and the return-to-work program.</li>
          <li><strong>Risk register:</strong> cover office work, psychosocial hazards, client sites, driving, manual tasks, electrical/IT equipment, remote/after-hours work, ladders, batteries and intrusive installation work where applicable.</li>
          <li><strong>First-aid kit:</strong> document kitchen-kit stock and expiry checks; provide portable/vehicle access where the risk assessment requires it.</li>
          <li><strong>Training register:</strong> retain qualification, induction and refresher evidence.</li>
          <li><strong>Injury register:</strong> ensure all staff know how to report and lodge an entry.</li>
          <li><strong>1 October 2026:</strong> re-check workers-compensation and return-to-work material when the next tranche of NSW reforms commences.</li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Official sources</h2>
        <ul>
          {officialSources.map(([label, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer">{label}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
