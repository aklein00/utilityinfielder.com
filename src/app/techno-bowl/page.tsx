import type { Metadata } from "next";
import PitchPage from "@/components/pitch/PitchPage";
import { technoBowlContent } from "./content";

export const metadata: Metadata = {
  title: "Techno Bowl — Utility Infielder",
  description:
    "A 2–4 player friend-slop sports gauntlet where one runner faces everyone else.",
};

export default function TechnoBowlPage() {
  return <PitchPage content={technoBowlContent} />;
}
