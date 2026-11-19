import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mouth ulcer podcasts | Health Reference", description: "Three specialist-led oral health episodes with in-page publisher playback." };

const episodes = [
  {
    title: "Oral Mucosal Diseases: Part One",
    publisher: "Skin Health Institute · Spot Diagnosis · S04 E06",
    description: "Dr Simone Belobrov and A/Prof Laura Scardamaglia explain mouth ulcers, causes, investigation and management.",
    audio: "https://traffic.omny.fm/d/clips/d12fa6a5-bad6-4025-9d74-ac600024ef6b/98ece318-818d-44e5-8da2-ac6000259d49/baae3daa-a318-4b33-ae21-b0180009f752/audio.mp3",
    embed: "https://omny.fm/shows/spot-diagnosis/s04-e06-oral-mucosal-diseases-part-one/embed",
    source: "https://skinhealthinstitute.org.au/spot-diagnosis/oral-mucosal-diseases-part-one-and-part-two/",
  },
  {
    title: "Oral Mucosal Diseases: Part Two",
    publisher: "Skin Health Institute · Spot Diagnosis · S04 E07",
    description: "The specialists discuss oral lichen planus, Sjögren’s syndrome and potentially serious oral presentations.",
    audio: "https://traffic.omny.fm/d/clips/d12fa6a5-bad6-4025-9d74-ac600024ef6b/98ece318-818d-44e5-8da2-ac6000259d49/e4c415e8-233b-4e89-a626-b01800128ba7/audio.mp3",
    embed: "https://omny.fm/shows/spot-diagnosis/s04-e07-oral-mucosal-diseases-part-two/embed",
    source: "https://skinhealthinstitute.org.au/spot-diagnosis/oral-mucosal-diseases-part-one-and-part-two/",
  },
  {
    title: "Navigating Oral Ulcerative Conditions: When to Treat, Refer, or Reassure",
    publisher: "Dr Phil Klein Dental Podcast · Episode 698 · Dr Ashley Clark",
    description: "An oral pathologist discusses common ulcers, concerning symptoms and referral decisions.",
    audio: "https://cdn.vivarep.com/contrib/va/podcast/podcast_703_clark_navig_oral_ulcers_voco_shining3d_t_ek.20250519032956493.mp3",
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
        <p>Listen right here using audio hosted by the publisher:</p>
        <audio controls preload="none" aria-label={`Listen to ${episode.title}`} style={{display:"block",width:"100%",marginTop:12}}>
          <source src={episode.audio} type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
        <details style={{marginTop:12}}>
          <summary style={{cursor:"pointer"}}>Show the publisher’s original embedded player</summary>
          <iframe title={`Play ${episode.title}`} src={episode.embed} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" style={{width:"100%",height:episode.embed.includes("youtube")?260:180,border:0,borderRadius:8}} />
        </details>
        <p><a href={episode.source} target="_blank" rel="noopener noreferrer">Episode details and transcript where available</a></p>
      </article>)}
    </div>
    <p><Link href="/">Back to Health Reference</Link></p>
  </main>;
}
