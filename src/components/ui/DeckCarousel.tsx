"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const ROTATE_MS = 6000;

export interface DeckSlide {
  id: string;
  name: string;
  /** Small label above the project name. */
  label: string;
  /** Local cover image. Omitted slides use a dark gradient placeholder. */
  image?: string;
  imageAlt?: string;
  /** Public deck URL. Omitted when the link was not provided. */
  href?: string;
}

/**
 * Last Arcade and Techno Bowl deck links were not provided, so those slides
 * stay as placeholders with no outbound link.
 */
export const deckSlides: DeckSlide[] = [
  {
    id: "last-arcade",
    name: "Last Arcade",
    label: "Pitch deck",
  },
  {
    id: "techno-bowl",
    name: "Techno Bowl",
    label: "Pitch deck",
  },
  {
    id: "project-ocean",
    name: "Project Ocean",
    label: "In development",
    image: "/assets/images/carousel/project-ocean.webp",
    imageAlt:
      "A manta ray gliding through sunlit water beneath a sailboat on the horizon",
  },
];

export default function DeckCarousel({
  slides = deckSlides,
}: {
  slides?: DeckSlide[];
}) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const count = slides.length;

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (reduceMotion || pausedRef.current || timerRef.current !== null) return;
    if (document.hidden) return;
    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, ROTATE_MS);
  }, [count, reduceMotion]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [start, stop]);

  const go = (next: number) => {
    setIndex((next + count) % count);
    stop();
    start();
  };

  const pause = () => {
    pausedRef.current = true;
    stop();
  };

  const resume = () => {
    pausedRef.current = false;
    start();
  };

  return (
    <section
      ref={rootRef}
      className="deck-carousel"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          resume();
        }
      }}
    >
      <div className="deck-carousel-track">
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <article
              key={slide.id}
              className={`deck-slide${active ? " is-active" : ""}${slide.image ? "" : " no-image"}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.name}`}
              aria-hidden={active ? undefined : true}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={active ? (slide.imageAlt ?? "") : ""}
                  fill
                  sizes="(max-width: 1000px) 100vw, 1000px"
                  className="deck-slide-image"
                />
              ) : null}
            </article>
          );
        })}
        <div className="deck-slide-overlay">
          <p className="deck-slide-kicker">{slides[index].label}</p>
          <h2>{slides[index].name}</h2>
          {slides[index].href ? (
            <a
              className="deck-link"
              href={slides[index].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View deck
            </a>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        className="deck-carousel-arrow prev"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="deck-carousel-arrow next"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div className="deck-carousel-dots" role="group" aria-label="Choose slide">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show ${slide.name}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
