import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Manager — Utility Infielder",
  description:
    "Tracks the status and progress of every project on Utility Infielder.",
};

export default function GameManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden", background: "#0d1117" }}>
        {children}
      </body>
    </html>
  );
}
