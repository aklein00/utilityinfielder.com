export interface DeckSlide {
  id: string;
  name: string;
  label: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  href?: string;
  mobileCrop?: "center" | "right";
}

export const deckSlides: DeckSlide[] = [
  {
    id: "vr-high-school",
    name: "VR High School",
    label: "Game pitch",
    image: "/assets/images/projects/vr-high-school.webp",
    imagePosition: "center 20%",
    imageAlt:
      "The Goblin Bard leads a music lesson with a halfling playing flute and a dwarf playing a hand drum",
    href: "https://vrhs.utilityinfielder.com",
    mobileCrop: "center",
  },
  {
    id: "last-arcade",
    name: "Last Arcade",
    label: "Alpha pitch",
    image: "/assets/images/carousel/last-arcade.jpg",
    imageAlt:
      "Last Arcade crew defending a neon arcade from a monster horde",
    href: "/last-arcade",
  },
  {
    id: "techno-bowl",
    name: "Techno Bowl",
    label: "Alpha pitch",
    image: "/assets/images/carousel/techno-bowl.jpg",
    imageAlt:
      "Two Techno Bowl players meeting above a sunset sports arena",
    href: "/techno-bowl",
    mobileCrop: "center",
  },
  {
    id: "project-ocean",
    name: "Project Ocean",
    label: "Live Alpha",
    image: "/assets/images/carousel/project-ocean-v6.webp",
    imageAlt:
      "Six slender characters in distinct fashionable outfits beside a wireframe character study",
    href: "https://projectocean.utilityinfielder.com",
    mobileCrop: "center",
  },
];
