import type { Metadata } from "next";
import PitchPage from "@/components/pitch/PitchPage";
import { imageFarmContent } from "./content";

export const metadata: Metadata = {
  title: "ImageFarm — Utility Infielder",
  description:
    "A private studio for repeatable generative art: style tracks, ComfyUI and Figma Weave workflows, and a material study that exports layered PSDs.",
};

export default function ImageFarmPage() {
  return <PitchPage content={imageFarmContent} />;
}
