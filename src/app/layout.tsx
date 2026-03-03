import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utility Infielder",
  description:
    "A playground for presentable vibecoded projects — playable games, tools, and experiments by Art Klein.",
  openGraph: {
    title: "Utility Infielder",
    description:
      "Games, tools, and experiments. Where the curiosity lives.",
    url: "https://utilityinfielder.com",
    siteName: "Utility Infielder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
