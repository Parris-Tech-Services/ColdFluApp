import Link from "next/link";

export const metadata = { title: "Mouth ulcer podcasts | Health Reference" };

const episodes = [
  {
    title: "Oral Mucosal Diseases: Part One",
    publisher: "Skin Health Institute — Spot Diagnosis, S4 E6",
    description: "Oral medicine specialist Dr Simone Belobrov and dermatologist A/Prof Laura Scardamaglia discuss mouth ulcers, assessment and management.",
    url: "https://skinhealthinstitute.org.au/spot-diagnosis/oral-mucosal-diseases-part-one-and-part-two/",
    verified: true,
  },
  {
    title: "Oral Mucosal Diseases: Part Two",
    publisher: "Skin Health Institute — Spot Diagnosis, S4 E7",
    description: "The same specialists discuss other oral mucosal conditions.",
    url: "https://skinhealthinstitute.org.au/spot-diagnosis/oral-mucosal-diseases-part-one-and-part-two/",
    verified: true,
  },
];

export default function ListenPage() {
  return (
    <main>
      <h1>Listen: mouth ulcers and oral health</h1>
      <p>Educational audio from identified specialists. These episodes are not individual medical advice or independently reviewed clinical guidance from Health Reference.</p>
      <p>Playback inside this app is not yet available: publisher-approved audio stream URLs have not been verified. The publisher provides listening options on its episode page.</p>
      <div className="card-grid">
        {episodes.map((episode) => (
          <article className="card" key={episode.title}>
            <h2>{episode.title}</h2>
            <p>{episode.publisher}</p>
            <p>{episode.description}</p>
            <p><a href={episode.url} target="_blank" rel="noopener noreferrer">Listen on the publisher’s website</a></p>
          </article>
        ))}
      </div>
      <p>The previously suggested RNZ and Dental Podcast episodes are withheld until their exact episode pages and playback rights are verified.</p>
      <p><Link href="/">Back to Health Reference</Link></p>
    </main>
  );
}
