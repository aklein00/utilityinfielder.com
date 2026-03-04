export default function SiteFooter() {
  return (
    <footer
      className="border-t mt-24"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <div
        className="flex flex-wrap items-center justify-between gap-4"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "28px 32px" }}
      >
        <span
          className="text-[12px] font-semibold uppercase tracking-[0.1em]"
          style={{ color: "var(--text-muted)" }}
        >
          Utility Infielder
        </span>

        <div className="flex items-center gap-6">
          <a
            href="https://artkleinart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] no-underline hover:underline"
            style={{ color: "var(--text-muted)" }}
          >
            Full portfolio at artkleinart.com
          </a>
          <a
            href="https://www.linkedin.com/in/arthurjklein/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] no-underline hover:underline"
            style={{ color: "var(--text-muted)" }}
          >
            LinkedIn
          </a>
        </div>

        <p
          className="w-full text-center text-[11px]"
          style={{ color: "var(--text-muted)", opacity: 0.45 }}
        >
          © {new Date().getFullYear()} Art Klein
        </p>
      </div>
    </footer>
  );
}
