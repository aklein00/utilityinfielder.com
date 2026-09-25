import type { Metadata } from "next";
import PitchPage from "@/components/pitch/PitchPage";
import { lastArcadeContent } from "./content";

export const metadata: Metadata = {
  title: "Last Arcade — Utility Infielder",
  description:
    "A 2–4 player co-op game about keeping the last functioning arcade alive during a monster apocalypse.",
};

export default function LastArcadePage() {
  return <PitchPage content={lastArcadeContent} />;
}
