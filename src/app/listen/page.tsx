import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mouth ulcer podcasts | Health Reference", description: "Three specialist-led oral health episodes with in-page publisher playback." };

const episodes = [
  {
    title: "Oral Mucosal Diseases: Part One",
    publisher: "Skin Health Institute · Spot Diagnosis · S04 E06",
    description: "Dr Simone Belobrov and A/Prof Laura Scardamaglia explain mouth ulcers, causes, investigation and management.",
    embed: "https://omny.fm/shows/spot-diagnosis/s04-e06-oral-mucosal-diseases-part-one/embed",
    source: "https://skinhealthinstitute.org.au/spot-diagnosis/oral-mucosal-diseases-part-one-and-part-two/",
  },
  {
    title: "Oral Mucosal Diseases: Part Two",
    publisher: "Skin Health Institute · Spot Diagnosis · S04 E07",
    description: "The specialists discuss oral lichen planus, Sjögren’s syndrome and potentially serious oral presentations.",
    embed: "https://omny.fm/shows/spot-diagnosis/s04-e07-oral-mucosal-diseases-part-two/embed",
    source: "https://skinhealthinstitute.org.au/spot-diagnosis/oral-mucosal-diseases-part-one-and-part-two/",
  },
  {
    title: "Navigating Oral Ulcerative Conditions: When to Treat, Refer, or Reassure",
    publisher: "Dr Phil Klein Dental Podcast · Episode 698 · Dr Ashley Clark",
    description: "An oral pathologist discusses common ulcers, concerning symptoms and referral decisions.",
    embed: "https://www.youtube-nocookie.com/embed/x2rUpHx0Lr4",
    source: "https://philkleindentalpodcast.com/episodes/ulcerative-conditions-of-the-oral-cavity",
  },
] as const;

export default function ListenPage() {
  return <main>
    <h1>Mouth ulcer podcasts</h1>
    <p>Three specialist-led episodes playable on this page through their publishers’ embedded players. Press play in a player below; no separate podcast app is required.</p>
    <p>Educational media, not individual medical advice. The publishers’ views have not undergone this site’s independent clinical review. If an ulcer persists for two weeks, seek advice from a dentist or GP.</p>
    <div className="card-grid">
      {episodes.map((episode) => <article className="card" key={episode.title}>
        <h2>{episode.title}</h2>
        <p>{episode.publisher}</p>
        <p>{episode.description}</p>
        <iframe title={`Play ${episode.title}`} src={episode.embed} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" style={{width:"100%",height:episode.embed.includes("youtube")?260:180,border:0,borderRadius:8}} />
        <p><a href={episode.source} target="_blank" rel="noopener noreferrer">Episode details and transcript where available</a></p>
      </article>)}
    </div>
    <p><Link href="/">Back to Health Reference</Link></p>
  </main>;
}
