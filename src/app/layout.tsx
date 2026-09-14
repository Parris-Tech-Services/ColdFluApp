import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Health Reference", template: "%s · Health Reference" },
  description: "An evidence-led Australian-first health research and learning reference. Reviewed medical content remains gated by source verification and human review.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <noscript>
          <div className="noscript-banner" role="status">
            JavaScript is disabled, but the core information pages remain available.
          </div>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link href="/" className="brand">
            Health Reference
          </Link>
          <div className="site-header-actions">
            <nav aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/health-reference">Health Reference</Link>
              <Link href="/health-reference/resources">Learn</Link>
              <Link href="/health-reference/research">Research Explorer</Link>
              <Link href="/health-reference/quizzes">Quizzes</Link>
              <Link href="/modules">Modules</Link>
              <Link href="/sources">Sources</Link>
              <Link href="/about/methodology">Methodology</Link>
              <Link href="/about/privacy">Privacy</Link>
              <Link href="/about/corrections">Corrections</Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        <main id="main" className="shell" tabIndex={-1}>
          {children}
        </main>
        <footer>
          <p>Health research and learning reference. Not a diagnosis or substitute for professional care, emergency services, local clinical policy or accredited training.</p>
        </footer>
      </body>
    </html>
  );
}
