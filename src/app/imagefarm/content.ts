import type { PitchPageContent } from "@/components/pitch/PitchPage";

export const imageFarmContent: PitchPageContent = {
  title: "ImageFarm",
  kicker: "Creative Tool · Generative Art Pipelines",
  tagline: "One studio for styles, workflows, and finished images.",
  summary:
    "ImageFarm is a private workspace for repeatable generative art. It keeps style direction, prompts, ComfyUI and Figma Weave workflows, and the image library in one place, so a look can be produced again instead of rediscovered.",
  cta: {
    label: "Open ImageFarm",
    href: "https://imagefarm.utilityinfielder.com",
    note: "Private tool · sign-in required",
  },
  heroImage: {
    src: "/assets/images/imagefarm/luxury-chair.jpg",
    alt: "A walnut and bouclé lounge chair in a sunlit travertine room",
    aspect: "wide",
  },
  accent: "#d9a65b",
  accentSecondary: "#8fd3c1",
  surface: "#15120e",
  sections: [
    {
      eyebrow: "Three Style Tracks",
      title: "Each look has its own brief",
      body: [
        "Every track carries its own prompt draft, exclusions, canvas ratio, seed, and Midjourney SREF code. Enhance Prompt adds art direction for the current track without touching the subject.",
      ],
      highlights: [
        { label: "Luxury Goods", text: "Refined furniture, materials, and editorial product shots." },
        { label: "Illustrated Vector", text: "Friendly characters, props, and readable backgrounds." },
        { label: "Blocky 3D", text: "Modular scenes for Last Arcade and Techno Bowl." },
      ],
      gallery: [
        {
          src: "/assets/images/imagefarm/woodland.jpg",
          alt: "Illustrated fox in a yellow raincoat beside a forest cabin",
          caption: "Illustrated vector · example study",
          aspect: "wide",
        },
        {
          src: "/assets/images/imagefarm/blocky-arcade.jpg",
          alt: "Blocky 3D diorama of a burger stand and basketball court at night",
          caption: "Blocky 3D · example study",
          aspect: "wide",
        },
      ],
    },
    {
      eyebrow: "Material Study",
      title: "One reference, six variations, two finals",
      body: [
        "Upload a reference, generate a base image on Comfy Cloud, and compare six material and lighting variations side by side.",
        "Pick up to two finals and download them as layered PSDs or open them straight in Photopea.",
      ],
      image: {
        src: "/assets/images/imagefarm/luxury-chair.jpg",
        alt: "Luxury lounge chair material study",
        caption: "Luxury goods · example study",
        aspect: "wide",
      },
      layout: "image-left",
    },
    {
      eyebrow: "Pipelines",
      title: "Workflows you can run again",
      body: [
        "Studio exports ComfyUI workflows using only built-in nodes, and saves the matching API graph with its model and node requirements. Figma Weave links live alongside them.",
      ],
      callout: "The style is the asset. ImageFarm keeps it reproducible.",
      layout: "full",
    },
  ],
};
