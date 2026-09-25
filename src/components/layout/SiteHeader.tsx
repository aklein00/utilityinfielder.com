import Link from "next/link";

export default function SiteHeader() {
  return (
    <header
      className="border-b"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div
        className="flex flex-wrap items-center justify-between gap-2"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "12px 32px" }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline hover:no-underline"
        >
          <span
            className="text-[13px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--text)" }}
          >
            Utility Infielder
          </span>
        </Link>

        {/* Portfolio link */}
        <nav className="flex flex-wrap items-center justify-end gap-1">
          <a
            href="https://artkleinart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-[12px] font-semibold uppercase tracking-[0.04em] px-3 py-2 no-underline hover:no-underline"
          >
            Portfolio →
          </a>
        </nav>
      </div>
    </header>
  );
}
