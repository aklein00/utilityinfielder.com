import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  const liveProjects = projects.filter((p) => p.status === "live");
  const wipProjects = projects.filter((p) => p.status === "wip");
  const comingSoonProjects = projects.filter(
    (p) => p.status === "coming-soon"
  );

  return (
    <>
      <SiteHeader />

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 32px 80px" }}>

        {/* Hero */}
        <section style={{ padding: "56px 0 48px", borderBottom: "1px solid var(--border)", marginBottom: "48px" }}>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--accent)", marginBottom: "16px" }}
          >
            Utility Infielder
          </p>
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "520px", marginBottom: "24px" }}
          >
            Games, tools, and experiments built with vibe-coding workflows.
            artkleinart.com shows the career — this is the playground.
          </p>
          <a
            href="https://artkleinart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[13px] font-semibold uppercase tracking-[0.04em] no-underline hover:no-underline transition-colors duration-150"
            style={{ color: "var(--accent)" }}
          >
            Full portfolio at artkleinart.com →
          </a>
        </section>

        {/* Live Projects */}
        {liveProjects.length > 0 && (
          <section style={{ marginBottom: "80px" }}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)", marginBottom: "16px" }}
            >
              Live
            </p>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon */}
        {comingSoonProjects.length > 0 && (
          <section style={{ marginBottom: "80px" }}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)", marginBottom: "4px" }}
            >
              Coming Soon
            </p>
            <p
              className="text-[12px]"
              style={{ color: "var(--text-muted)", opacity: 0.5, marginBottom: "16px" }}
            >
              Built and playable — deploying soon.
            </p>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {comingSoonProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* In Progress */}
        {wipProjects.length > 0 && (
          <section>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)", marginBottom: "4px" }}
            >
              In Progress
            </p>
            <p
              className="text-[12px]"
              style={{ color: "var(--text-muted)", opacity: 0.5, marginBottom: "16px" }}
            >
              Under active development.
            </p>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {wipProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

      </main>

      <SiteFooter />
    </>
  );
}
