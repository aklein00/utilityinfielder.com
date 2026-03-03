import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isClickable = project.status === "live" && project.href !== null;

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (!isClickable || !project.href) {
      return <div className="group block cursor-default">{children}</div>;
    }
    if (project.isExternal) {
      return (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={project.href} className="group block">
        {children}
      </Link>
    );
  };

  return (
    <CardWrapper>
      <div
        className="h-full rounded-sm border transition-colors duration-150"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        {/* Image placeholder area */}
        <div
          className="w-full h-40 rounded-t-sm flex items-center justify-center"
          style={{ background: "var(--surface-2)" }}
        >
          <span
            className="text-[11px] font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)", opacity: 0.4 }}
          >
            {project.name}
          </span>
        </div>

        {/* Card body */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3
              className="text-[15px] font-semibold leading-snug transition-colors duration-150"
              style={{
                color: isClickable ? "var(--accent)" : "var(--text)",
              }}
            >
              {isClickable ? (
                <span className="group-hover:underline">{project.name}</span>
              ) : (
                project.name
              )}
            </h3>
            <Badge status={project.status} className="shrink-0 mt-0.5" />
          </div>

          <p
            className="text-[13px] leading-relaxed mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
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
      </div>
    </CardWrapper>
  );
}
