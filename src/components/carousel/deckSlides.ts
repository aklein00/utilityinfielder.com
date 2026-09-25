export interface DeckSlide {
  id: string;
  name: string;
  label: string;
  image: string;
  imageAlt: string;
  href?: string;
}

export const deckSlides: DeckSlide[] = [
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
  },
  {
    id: "project-ocean",
    name: "Project Ocean",
    label: "In development",
    image: "/assets/images/carousel/project-ocean.jpg",
    imageAlt:
      "A manta ray gliding through sunlit water beneath a sailboat",
  },
];
