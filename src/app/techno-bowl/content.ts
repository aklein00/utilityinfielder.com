import type { PitchPageContent } from "@/components/pitch/PitchPage";

export const technoBowlContent: PitchPageContent = {
  title: "Techno Bowl",
  kicker: "2–4 Player Friend Slop · Sports Gauntlet",
  tagline: "Run. Throw. Survive. Dance.",
  summary:
    "One runner takes the field. Everyone else is above it, completing tasks, earning ridiculous projectiles, and trying to ruin the run.",
  heroImage: {
    src: "/assets/images/techno-bowl/key-art.jpg",
    alt: "Techno Bowl sunset arena key art",
    position: "center 16%",
  },
  accent: "#ff247f",
  accentSecondary: "#ff9b5e",
  surface: "#1e1824",
  sections: [
    {
      eyebrow: "The Hook",
      title: "One runner. Everyone else tries to ruin the run.",
      body: [
        "Football-drill readability meets party-game sabotage and outdoor techno spectacle.",
        "The runner moves through a physical obstacle course while the throwers work from catwalks above, choosing when to cooperate and when to chase their own clean hit.",
      ],
      image: {
        src: "/assets/images/techno-bowl/hook.jpg",
        alt: "A runner crossing the Techno Bowl field under the throwers",
        aspect: "portrait",
      },
    },
    {
      eyebrow: "The 3-Minute Run",
      title: "Two roles. One escalating mess.",
      body: [
        "Difficulty ramps toward a chaotic three-minute survival target. The round stays short enough to rotate roles and immediately demand another try.",
      ],
      highlights: [
        {
          label: "Runner",
          text: "Dodge, juke, capture eight flags, and use temporary stuns.",
        },
        {
          label: "Throwers",
          text: "Complete console tasks, earn random projectiles, aim, and score clean hits.",
        },
      ],
      callout: "Run. Throw. Survive. Dance.",
      layout: "full",
    },
    {
      eyebrow: "Course Design",
      title: "The field is a player",
      body: [
        "Obstacle stations are connected by readable running space. Each station holds a capture flag.",
        "Course hazards create chaos without making every failure feel personally targeted.",
      ],
      image: {
        src: "/assets/images/techno-bowl/field.jpg",
        alt: "Techno Bowl runner navigating an obstacle field",
        aspect: "wide",
      },
      layout: "image-left",
    },
    {
      eyebrow: "Co-op Until It Isn’t",
      title: "Help the group—or steal the moment?",
      body: [
        "Throwers sometimes need each other to unlock better attacks, but clean hits reward the individual.",
        "The useful teammate beside you is also the rival waiting to take the shot.",
      ],
      image: {
        src: "/assets/images/techno-bowl/coop.jpg",
        alt: "Techno Bowl throwers working together above the field",
        aspect: "wide",
      },
    },
    {
      eyebrow: "Friend Slop, By Design",
      title: "Randomness creates stories, not winners",
      body: [
        "Low explanation cost. Fast social consequences. Skillful movement inside deliberately messy situations.",
        "Role rotation makes every round feel different.",
      ],
      callout: "The desired post-round response: “Again.”",
      image: {
        src: "/assets/images/techno-bowl/friend-slop.jpg",
        alt: "Friends competing in a chaotic Techno Bowl round",
        aspect: "portrait",
      },
      layout: "image-left",
    },
    {
      eyebrow: "Visual Direction",
      title: "Sport × techno × desert disco",
      body: [
        "Sporting equipment collides with outdoor rave infrastructure: shoulder pads, kneepads, jerseys, catwalks, disco balls, glitter, steam, furry accents, and handmade geometry.",
        "Simple forms and vector textures keep the art buildable.",
      ],
      image: {
        src: "/assets/images/techno-bowl/art-direction.jpg",
        alt: "Techno Bowl sports and desert-rave visual direction",
      },
    },
    {
      eyebrow: "Characters",
      title: "Procedural people, strong silhouettes",
      body: [
        "Long rectangular heads and stretched proportions give the crowd a recognizable visual language.",
        "Modular bodies, sports gear, rave accessories, and color swaps create a related cast without a huge authored roster.",
      ],
      gallery: [
        {
          src: "/assets/images/techno-bowl/characters-a.jpg",
          alt: "Techno Bowl modular character lineup",
          caption: "Modular bodies",
        },
        {
          src: "/assets/images/techno-bowl/characters-b.jpg",
          alt: "Techno Bowl character silhouettes and gear",
          caption: "Strong silhouettes",
        },
      ],
      layout: "image-left",
    },
    {
      eyebrow: "Vertical Slice",
      title: "Build the fun first",
      body: [
        "One field. Eight obstacles. One runner. One to three throwers. Two teleporters. Console tasks. A card-and-throw system.",
        "Then expand courses, tasks, obstacles, procedural characters, and music-reactive escalation.",
      ],
      callout:
        "Prove the movement feels good, hits read clearly, sabotage is funny, and three minutes doesn’t drag.",
      image: {
        src: "/assets/images/techno-bowl/field-schematic.jpg",
        alt: "Top-down schematic for the Techno Bowl sunset-rave field",
        aspect: "wide",
      },
      layout: "full",
    },
    {
      eyebrow: "The World",
      title: "More than a game",
      body: [
        "Different gear, the same field, and a new story every round. Sports chaos and rave energy turn the arena into a social event.",
      ],
      image: {
        src: "/assets/images/techno-bowl/poster-grid.jpg",
        alt: "Techno Bowl poster series for run, throw, survive, and dance",
        aspect: "portrait",
      },
    },
    {
      eyebrow: "Prototype Targets",
      title: "What we’d measure",
      body: [
        "These are playtest hypotheses, not claimed results. The prototype succeeds when players generate stories worth retelling.",
      ],
      highlights: [
        { label: "First Spark", text: "Time to first laugh or first sabotage." },
        { label: "Again", text: "Rematch rate after one round." },
        { label: "Session", text: "Average rounds played per session." },
        { label: "Rotation", text: "Role-rotation completion." },
        { label: "Co-op", text: "Cooperative actions between throwers." },
        { label: "Course", text: "Flag completion and survival-time distribution." },
        { label: "Stories", text: "Playtest moments players retell afterward." },
      ],
      image: {
        src: "/assets/images/techno-bowl/metrics.jpg",
        alt: "Techno Bowl playtest and audience concept art",
        aspect: "portrait",
      },
      layout: "image-left",
    },
  ],
};
