import type { PitchPageContent } from "@/components/pitch/PitchPage";

export const lastArcadeContent: PitchPageContent = {
  title: "Last Arcade",
  kicker: "2–4 Player Co-op · One Arcade · One Night",
  tagline: "Keep the games running until morning.",
  summary:
    "You’re the night crew at the last functioning arcade during a monster apocalypse. Repair machines, screen customers, contain escaped creatures, and survive until morning.",
  heroImage: {
    src: "/assets/images/last-arcade/cover.jpg",
    alt: "The Last Arcade night crew defending a neon arcade",
    aspect: "wide",
  },
  accent: "#ff2a9d",
  accentSecondary: "#31e8e5",
  surface: "#14101b",
  sections: [
    {
      eyebrow: "The Pitch",
      title: "One arcade. One night. Too many problems.",
      body: [
        "Repair machines. Screen customers. Contain escaped creatures. Keep the doors shut. Survive until morning.",
        "The arcade is small enough to understand at a glance—and unstable enough that the crew can never be everywhere at once.",
      ],
      callout: "The last functioning arcade is also the last safe place in town.",
      image: {
        src: "/assets/images/last-arcade/pitch.jpg",
        alt: "Crew members working inside the neon arcade",
        aspect: "wide",
      },
    },
    {
      eyebrow: "Core Gameplay",
      title: "Purposeful mayhem",
      body: [
        "The fun is deciding which problem you can afford to ignore. Fix one thing, break another, and communicate fast.",
      ],
      highlights: [
        { label: "Repair", text: "Get damaged cabinets and systems running." },
        { label: "Route", text: "Move limited power to the priority that matters now." },
        { label: "Screen", text: "Decide who—or what—gets through the front door." },
        { label: "Contain", text: "Stop arcade creatures before they open a path outside." },
      ],
      image: {
        src: "/assets/images/last-arcade/core-gameplay.jpg",
        alt: "A first-person repair task inside Last Arcade",
        aspect: "wide",
      },
      layout: "image-left",
    },
    {
      eyebrow: "Signature Mechanic",
      title: "Who do you let in?",
      body: [
        "Survivors arrive while the rest of the building falls apart. Scan them before opening the door.",
        "The scanner offers clues—not certainty. Glitches, odd shadows, and bad readings leave the final call to player judgment.",
      ],
      callout: "Trust your gut.",
      image: {
        src: "/assets/images/last-arcade/scanner.jpg",
        alt: "A survivor being scanned at the Last Arcade entrance",
        aspect: "wide",
      },
    },
    {
      eyebrow: "Pressure From Both Sides",
      title: "Keep them in. Keep them out.",
      body: [
        "The monsters in the machines want out. Escaped arcade creatures sabotage systems and try to open a path for what’s waiting outside.",
        "The monsters outside want in. Board windows, protect doors, and buy time. Every breach pulls players away from something else already breaking.",
      ],
      image: {
        src: "/assets/images/last-arcade/keep-in-out.jpg",
        alt: "Arcade creatures inside and monsters outside the building",
        aspect: "wide",
      },
      layout: "image-left",
    },
    {
      eyebrow: "Moment To Moment",
      title: "Every emergency creates another job",
      body: [
        "Boarding a window keeps the horde out, but the player carrying planks is not repairing cabinets, checking customers, or restoring the power.",
        "The objective list stays simple. The pressure comes from doing all of it at once.",
      ],
      image: {
        src: "/assets/images/last-arcade/barricade-gameplay.jpg",
        alt: "First-person view of the crew barricading an arcade window",
        aspect: "wide",
      },
    },
    {
      eyebrow: "Systemic Choices",
      title: "Every fix has a cost",
      body: [
        "Security doors or cabinets? Scanner or lights? Front desk or prize zone?",
        "Power is a shared resource. Players physically reroute it as priorities change.",
      ],
      callout: "You can’t save everything. Choose what breaks.",
      image: {
        src: "/assets/images/last-arcade/systemic-choices.jpg",
        alt: "Last Arcade power routing and maintenance systems",
        aspect: "wide",
      },
      layout: "image-left",
    },
    {
      eyebrow: "Co-op",
      title: "No classes. Just jobs that need doing.",
      body: [
        "Players naturally split up—repairing, scanning, barricading, carrying, and routing power—then abandon those jobs when the next emergency hits.",
      ],
      callout: "Communication is the real mechanic.",
      image: {
        src: "/assets/images/last-arcade/coop.jpg",
        alt: "The Last Arcade crew handling different jobs together",
      },
    },
    {
      eyebrow: "Production Strategy",
      title: "Small world. Big systems.",
      body: [
        "Built to be achievable with Three.js and primitive geometry: boxes, planes, cylinders, and emissive screens.",
      ],
      highlights: [
        { label: "One Arcade", text: "A compact, readable level." },
        { label: "One Night", text: "Escalation instead of content sprawl." },
        { label: "Primitive Art", text: "Simple forms with a strong neon identity." },
        { label: "Systemic Replay", text: "Events combine differently every run." },
      ],
      image: {
        src: "/assets/images/last-arcade/production.jpg",
        alt: "Primitive geometry and emissive arcade machines",
      },
      layout: "image-left",
    },
    {
      eyebrow: "The Promise",
      title: "Keep the arcade running",
      body: [
        "Keep them in. Keep them out. Cooperate, repair, manage, and survive.",
      ],
      image: {
        src: "/assets/images/last-arcade/poster.jpg",
        alt: "Last Arcade concept poster",
        aspect: "portrait",
      },
    },
    {
      eyebrow: "One Night, Again And Again",
      title: "The building tells a different story every run",
      body: [
        "A compact floor plan keeps the crew oriented while failures, breaches, customers, and escaped creatures combine into a new chain of decisions.",
      ],
      image: {
        src: "/assets/images/last-arcade/arcade-gameplay.jpg",
        alt: "Arcade creature escaping from a cabinet during play",
        aspect: "wide",
      },
      layout: "full",
    },
  ],
};
