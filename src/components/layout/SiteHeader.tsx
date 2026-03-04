export default function SiteHeader() {
  return (
    <header
      className="border-b"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "12px 32px" }}
      >
        {/* Wordmark */}
        <a
          href="/"
          className="flex items-center gap-2 no-underline hover:no-underline"
        >
          <span
            className="text-[13px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--text)" }}
          >
            Utility Infielder
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-sm"
            style={{
              color: "var(--accent)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            Beta
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-1">
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
