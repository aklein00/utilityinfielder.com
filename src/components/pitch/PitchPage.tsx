import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import styles from "./PitchPage.module.css";

export interface PitchImage {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "landscape" | "portrait" | "wide";
  fit?: "cover" | "contain";
  position?: string;
}

export interface PitchHighlight {
  label: string;
  text: string;
}

export interface PitchSection {
  eyebrow: string;
  title: string;
  body: string[];
  callout?: string;
  highlights?: PitchHighlight[];
  image?: PitchImage;
  gallery?: PitchImage[];
  layout?: "image-left" | "image-right" | "full";
}

export interface PitchPageContent {
  title: string;
  kicker: string;
  tagline: string;
  summary: string;
  heroImage: PitchImage;
  accent: string;
  accentSecondary: string;
  surface: string;
  sections: PitchSection[];
}

type PitchStyle = CSSProperties & {
  "--pitch-accent": string;
  "--pitch-accent-2": string;
  "--pitch-surface": string;
};

function visualClass(image: PitchImage) {
  return [
    styles.sectionArt,
    image.aspect === "portrait" ? styles.portrait : "",
    image.aspect === "wide" ? styles.wide : "",
    image.fit === "contain" ? styles.contain : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function PitchVisual({ image }: { image: PitchImage }) {
  return (
    <figure className={visualClass(image)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 760px) 100vw, 520px"
        style={{ objectPosition: image.position ?? "center" }}
      />
      {image.caption && (
        <figcaption className={styles.caption}>{image.caption}</figcaption>
      )}
    </figure>
  );
}

function SectionVisual({ section }: { section: PitchSection }) {
  if (section.gallery) {
    return (
      <div className={styles.gallery}>
        {section.gallery.map((image) => (
          <PitchVisual key={image.src} image={image} />
        ))}
      </div>
    );
  }

  return section.image ? <PitchVisual image={section.image} /> : null;
}

export default function PitchPage({ content }: { content: PitchPageContent }) {
  const pitchStyle: PitchStyle = {
    "--pitch-accent": content.accent,
    "--pitch-accent-2": content.accentSecondary,
    "--pitch-surface": content.surface,
  };

  return (
    <div className={styles.root} style={pitchStyle}>
      <SiteHeader />
      <main className={styles.main}>
        <p className={styles.breadcrumb}>
          <Link href="/">Utility Infielder</Link>
          {" / "}
          <span>{content.title}</span>
        </p>

        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>{content.kicker}</p>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.tagline}>{content.tagline}</p>
            <p className={styles.summary}>{content.summary}</p>
          </div>
          <div className={styles.heroArt}>
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 600px"
              style={{
                objectFit: content.heroImage.fit ?? "cover",
                objectPosition: content.heroImage.position ?? "center",
              }}
            />
          </div>
        </section>

        <div className={styles.sections}>
          {content.sections.map((section) => {
            const sectionClass = [
              styles.section,
              section.layout === "image-left" ? styles.imageLeft : "",
              section.layout === "full" ? styles.fullWidth : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <section className={sectionClass} key={section.title}>
                <div className={styles.copy}>
                  <p className={styles.eyebrow}>{section.eyebrow}</p>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <div className={styles.body}>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.callout && (
                    <p className={styles.callout}>{section.callout}</p>
                  )}
                  {section.highlights && (
                    <div className={styles.highlights}>
                      {section.highlights.map((item) => (
                        <div className={styles.highlight} key={item.label}>
                          <span className={styles.highlightLabel}>
                            {item.label}
                          </span>
                          <p className={styles.highlightText}>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {(section.image || section.gallery) && (
                  <div className={styles.visual}>
                    <SectionVisual section={section} />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
