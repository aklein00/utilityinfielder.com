import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/projects";

interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className:
      "bg-emerald-950 text-emerald-400 border border-emerald-800",
  },
  "coming-soon": {
    label: "Coming Soon",
    className:
      "bg-[#1f1a14] text-[#e07b39] border border-[#3d2e1a]",
  },
  wip: {
    label: "In Progress",
    className:
      "bg-[#1a1a22] text-[#8888cc] border border-[#2a2a3a]",
  },
};

export default function Badge({ status, className }: BadgeProps) {
  const { label, className: statusClass } = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest rounded-sm",
        statusClass,
        className
      )}
    >
      {label}
    </span>
  );
}
