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
        <section style={{ padding: "24px 0 40px", borderBottom: "1px solid var(--border)", marginBottom: "48px" }}>
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "520px", marginBottom: "24px" }}
          >
            Art Klein's personal lab — games, tools, and experiments built at the intersection of game development and AI.
            The full career and portfolio live at artkleinart.com.
          </p>
          <a
            href="https://artkleinart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] no-underline hover:no-underline transition-colors duration-150 px-3 py-2 rounded-sm"
            style={{
              color: "var(--accent)",
              border: "1px solid rgba(224,123,57,0.3)",
              background: "rgba(224,123,57,0.05)",
            }}
          >
            artkleinart.com →
          </a>
        </section>

        {/* Live Projects */}
        {liveProjects.length > 0 && (
          <section style={{ marginBottom: "64px" }}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)", marginBottom: "16px" }}
            >
              Live
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon */}
        {comingSoonProjects.length > 0 && (
          <section style={{ marginBottom: "64px" }}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)", marginBottom: "16px" }}
            >
              Coming Soon
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              style={{ color: "var(--text-muted)", marginBottom: "16px" }}
            >
              In Progress
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
