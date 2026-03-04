import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "JobbyBobby — Utility Infielder",
  description:
    "A multi-agent AI job search system. Bobby organizes, Lois scouts, the Architect builds — all running inside Cursor.",
};

const agents = [
  {
    name: "Bobby",
    role: "Master Organizer",
    description:
      "Runs a status check every 24 hours. Tracks applications, flags duplicates, monitors runway, and keeps the file system clean. The source of truth.",
    tags: ["check-ins", "tracking", "dedup"],
  },
  {
    name: "Lois",
    role: "Daily Job Scout",
    description:
      "Scans job boards every 24 hours. Evaluates fit across three career lanes, filters by location and salary, and queues new leads for review.",
    tags: ["search", "leads", "screening"],
  },
  {
    name: "Architect",
    role: "Technical Lead",
    description:
      "Handles hands-on implementation: website updates, utility scripts, and anything that requires actual code. Invoked manually.",
    tags: ["code", "website", "scripts"],
  },
  {
    name: "Advisors",
    role: "Strategic Counsel",
    description:
      "Three advisors: Sammy (small studio / Lane A), Larry (big studio / Lanes B–C), Compass (career + life coach). All read the full dossier before advising.",
    tags: ["strategy", "advice", "perspective"],
  },
];

const lanes = [
  {
    label: "Lane A",
    name: "Art Prototyper / Creative Technologist",
    pct: "40%",
    note: "Small studios, R&D, AI-integrated workflows.",
  },
  {
    label: "Lane B",
    name: "Senior Artist w/ Pipeline Awareness",
    pct: "30%",
    note: "AI workflow, creative ops. Not traditional TA.",
  },
  {
    label: "Lane C",
    name: "Senior 3D Artist / Art Lead",
    pct: "30%",
    note: "Safety net. Mobile, platforms, stylized art.",
  },
];

export default function JobbyBobbyPage() {
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
          <span style={{ color: "var(--accent)" }}>JobbyBobby</span>
        </p>

        {/* Hero */}
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
            Tool · AI Agents · Cursor
          </p>
          <h1
            className="text-[30px] font-semibold leading-tight mb-4"
            style={{ color: "var(--text)", maxWidth: "600px" }}
          >
            JobbyBobby
          </h1>
          <p
            className="text-[15px] leading-relaxed mb-3"
            style={{ color: "var(--text-muted)", maxWidth: "580px" }}
          >
            A multi-agent AI system for running a high-intensity job search with
            a hard deadline. Built and operated entirely inside Cursor with
            Claude.
          </p>
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "580px", opacity: 0.7 }}
          >
            Four agents working in parallel to organize, scout, advise, and build.
          </p>
        </section>

        {/* How it works */}
        <section style={{ marginBottom: "48px" }}>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            How It Works
          </p>
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "600px" }}
          >
            Each message sent in the project triggers a timestamp check. If an
            agent is overdue, it fires automatically before responding to
            whatever was asked. No background timers — the check runs the moment
            you type anything. The whole system lives in a{" "}
            <code
              className="text-[12px] px-1.5 py-0.5 rounded-sm"
              style={{
                background: "var(--surface-2)",
                color: "var(--accent)",
                border: "1px solid var(--border)",
              }}
            >
              .claude/
            </code>{" "}
            folder alongside the job tracking files.
          </p>
        </section>

        {/* Agents */}
        <section style={{ marginBottom: "56px" }}>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            The Agents
          </p>
          <p
            className="text-[12px] mb-6"
            style={{ color: "var(--text-muted)", opacity: 0.5 }}
          >
            Four agents, one shared context, one goal.
          </p>

          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            }}
          >
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-sm p-4"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-[15px] font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {agent.name}
                  </h3>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded-sm shrink-0"
                    style={{
                      color: "var(--accent)",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {agent.role}
                  </span>
                </div>
                <p
                  className="text-[13px] leading-relaxed mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {agent.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Lanes */}
        <section
          style={{
            marginBottom: "56px",
            paddingTop: "48px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            Three Career Lanes
          </p>
          <p
            className="text-[12px] mb-6"
            style={{ color: "var(--text-muted)", opacity: 0.5 }}
          >
            Applications are distributed across three parallel targets.
          </p>

          <div className="flex flex-col gap-3">
            {lanes.map((lane) => (
              <div
                key={lane.label}
                className="flex items-start gap-4 rounded-sm p-4"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-widest shrink-0 mt-0.5 px-1.5 py-0.5 rounded-sm"
                  style={{
                    color: "var(--accent)",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {lane.label}
                </span>
                <div>
                  <p
                    className="text-[14px] font-semibold mb-0.5"
                    style={{ color: "var(--text)" }}
                  >
                    {lane.name}{" "}
                    <span
                      className="text-[12px] font-normal"
                      style={{ color: "var(--text-muted)" }}
                    >
                      — {lane.pct}
                    </span>
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: "var(--text-muted)", opacity: 0.7 }}
                  >
                    {lane.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section
          style={{
            paddingTop: "48px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Built With
          </p>
          <div className="flex flex-wrap gap-2">
            {["Cursor", "Claude (Anthropic)", "Markdown files", "No backend", "No database"].map(
              (item) => (
                <span
                  key={item}
                  className="text-[12px] font-semibold px-2.5 py-1 rounded-sm"
                  style={{
                    background: "var(--surface)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
