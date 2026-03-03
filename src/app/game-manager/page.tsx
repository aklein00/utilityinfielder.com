import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Game Manager — Utility Infielder",
  description:
    "Tracks the status and progress of every project on Utility Infielder.",
};

export default function GameManagerPage() {
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
        {/* Breadcrumb */}
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
          <span style={{ color: "var(--accent)" }}>Game Manager</span>
        </p>

        {/* Hero */}
        <section
          style={{
            paddingBottom: "48px",
            borderBottom: "1px solid var(--border)",
            marginBottom: "64px",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
            style={{ color: "var(--accent)" }}
          >
            Tool · Dashboard
          </p>
          <h1
            className="text-[30px] font-semibold leading-tight mb-4"
            style={{ color: "var(--text)" }}
          >
            Game Manager
          </h1>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "520px" }}
          >
            Tracks the status and progress of every project on this site —
            build phases, deployment state, and what&apos;s next. Content
            uploading from another device.
          </p>
        </section>

        {/* Placeholder */}
        <div
          className="flex flex-col items-center justify-center rounded-sm py-20 px-8 text-center"
          style={{
            background: "var(--surface)",
            border: "2px dashed var(--border)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
            style={{ color: "var(--text-muted)", opacity: 0.45 }}
          >
            Content Pending
          </p>
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "380px", opacity: 0.6 }}
          >
            This project is being uploaded from another device. Check back
            soon.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block text-[12px] font-semibold uppercase tracking-[0.06em] no-underline hover:underline"
            style={{ color: "var(--accent)" }}
          >
            ← Back to all projects
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
