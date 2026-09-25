"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { deckSlides, type DeckSlide } from "./deckSlides";
import styles from "./DeckCarousel.module.css";

const ROTATE_MS = 6000;

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
    if (
      count < 2 ||
      reduceMotion ||
      pausedRef.current ||
      timerRef.current !== null ||
      document.hidden
    ) {
      return;
    }

    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, ROTATE_MS);
  }, [count, reduceMotion]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setReduceMotion(media.matches);

    applyPreference();
    media.addEventListener("change", applyPreference);
    return () => media.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [start, stop]);

  const goTo = (nextIndex: number) => {
    if (count === 0) return;
    setIndex((nextIndex + count) % count);
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

  const activeSlide = slides[index] ?? slides[0];
  if (!activeSlide) return null;

  return (
    <div className={styles.wrapper}>
      <section
        ref={rootRef}
        className={styles.carousel}
        aria-label="Featured projects"
        aria-roledescription="carousel"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={(event) => {
          if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
            resume();
          }
        }}
      >
        <div className={styles.track}>
          {slides.map((slide, slideIndex) => {
            const active = slideIndex === index;
            const mobileCropClass =
              slide.mobileCrop === "center"
                ? styles.mobileCropCenter
                : slide.mobileCrop === "right"
                  ? styles.mobileCropRight
                  : "";
            return (
              <article
                key={slide.id}
                className={`${styles.slide} ${active ? styles.active : ""}`}
                aria-label={`${slideIndex + 1} of ${count}: ${slide.name}`}
                aria-hidden={!active}
                aria-roledescription="slide"
              >
                <Image
                  src={slide.image}
                  alt={active ? slide.imageAlt : ""}
                  fill
                  priority={slideIndex === 0}
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  className={`${styles.image} ${mobileCropClass}`}
                />
              </article>
            );
          })}

          <div className={styles.overlay}>
            <div className={styles.overlayInner}>
              <p className={styles.kicker}>{activeSlide.label}</p>
              <h2 className={styles.title}>{activeSlide.name}</h2>
              {activeSlide.href && (
                <Link className={styles.link} href={activeSlide.href}>
                  View project
                </Link>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
        >
          ›
        </button>

        <div className={styles.dots} role="group" aria-label="Choose slide">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.dot} ${slideIndex === index ? styles.current : ""}`}
              aria-label={`Show ${slide.name}`}
              aria-current={slideIndex === index ? "true" : undefined}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
