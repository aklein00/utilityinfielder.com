import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Gateaux — Utility Infielder",
  description:
    "A cozy language-learning bakery game. Live beta — play at gateaux.utilityinfielder.com.",
};

const PLAY_URL = "https://gateaux.utilityinfielder.com";

const gallery = [
  {
    src: "/assets/images/gateaux/lineup.jpg",
    alt: "Gateaux — character lineup",
    caption: "Character Lineup",
    span: true,
  },
  {
    src: "/assets/images/gateaux/logo.jpg",
    alt: "Gateaux — logo",
    caption: "Logo",
    span: false,
  },
  {
    src: "/assets/images/gateaux/display.png",
    alt: "Gateaux — display case closeup",
    caption: "Display Case",
    span: false,
  },
] as const;

export default function GateauxPage() {
  return (
    <>
      <SiteHeader />

      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 32px 80px",
        }}
      >
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          <Link
            href="/"
            className="no-underline hover:underline"
            style={{ color: "var(--text-muted)" }}
          >
            Utility Infielder
          </Link>
          {" / "}
          <span style={{ color: "var(--accent)" }}>Gateaux</span>
        </p>

        <section
          style={{
            paddingBottom: "48px",
            borderBottom: "1px solid var(--border)",
            marginBottom: "48px",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
            style={{ color: "var(--accent)" }}
          >
            Game · Live Beta · Language
          </p>
          <h1
            className="text-[30px] font-semibold leading-tight mb-4"
            style={{ color: "var(--text)", maxWidth: "600px" }}
          >
            Gateaux
          </h1>
          <p
            className="text-[15px] leading-relaxed mb-3"
            style={{ color: "var(--text-muted)", maxWidth: "580px" }}
          >
            A cozy language-learning game where you run a magical bakery, take
            orders in a new language, and decorate pastries to unlock characters
            and story.
          </p>
          <p
            className="text-[14px] leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", maxWidth: "580px", opacity: 0.7 }}
          >
            Solo project. Design, mechanics, story, and visual identity — a
            warm style that scales from UI icons to splash art.
          </p>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] no-underline hover:no-underline transition-colors duration-150 px-4 py-2.5 rounded-sm"
            style={{
              color: "var(--accent)",
              border: "1px solid rgba(224,123,57,0.3)",
              background: "rgba(224,123,57,0.05)",
            }}
          >
            Play live beta →
          </a>
        </section>

        <section>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Art
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className={`relative overflow-hidden rounded-sm ${item.span ? "sm:col-span-2" : ""}`}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: item.span ? "16 / 9" : "4 / 3" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes={
                      item.span
                        ? "1000px"
                        : "(max-width: 640px) 100vw, 500px"
                    }
                  />
                </div>
                <figcaption
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] px-4 py-2.5"
                  style={{
                    color: "var(--text-muted)",
                    background: "var(--surface)",
                  }}
                >
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
