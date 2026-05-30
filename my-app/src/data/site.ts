export const site = {
  name: "Shay Van Pelt",
  tagline: "Software Engineering · UVic",
  email: "shayvanpelt05@gmail.com",
  phone: "(250) 507-8318",
  intro:
    "Fourth-year Software Engineering student at the University of Victoria, graduating August 2026. I'm seeking full-time software roles where I can build reliable full-stack products, strengthen QA automation, and ship well-tested features.",
  contactDescription:
    "Open to full-time software positions, collaborations, and conversations about building great products.",
  resumePath: "/resume.pdf",
  mailtoHref: "mailto:shayvanpelt05@gmail.com",
  gmailComposeHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=shayvanpelt05%40gmail.com",
  social: {
    github: "https://github.com/ShayVanPelt",
    linkedin: "https://linkedin.com/in/shay-van-pelt",
    website: "https://shayvanpelt.com",
  },
} as const;

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C#",
  "React",
  "Next.js",
  "PostgreSQL",
  "SQLite",
  "Tailwind CSS",
  "Selenium",
  "Docker",
  "Git",
  "REST APIs",
  "OAuth",
] as const;

export const workExperience = [
  {
    title: "Junior QA Analyst Co-op",
    company: "Journal Technologies",
    location: "Victoria, BC",
    date: "Jun 2025 – Apr 2026",
    highlights: [
      "Delivered production TypeScript feature work and authored accompanying unit tests to ensure reliability.",
      "Automated recurring QA spot checks with Java and Selenium, cutting time from 15 minutes to 5 (~66% faster).",
      "Drove regression, manual, and exploratory testing across releases; spot-checked production and validated tickets against expected behavior.",
      "Built and maintained TypeScript integration tests to increase coverage and prevent regressions.",
      "Partnered with QA and engineering to reproduce issues, verify fixes, and ensure smooth handoff to resolution.",
      "Authored test cases, run notes, and actionable bug reports so developers could fix issues with minimal back-and-forth.",
    ],
  },
  {
    title: "Full Stack Software Developer Co-op",
    company: "Certispec Services Inc.",
    location: "Vancouver, BC",
    date: "Jan 2025 – Apr 2025",
    highlights: [
      "Developed responsive user interfaces with Next.js, emphasizing maintainable and efficient code.",
      "Managed client state using Zustand, React hooks, and local state to balance scalability and simplicity.",
      "Implemented API pagination for large datasets, reducing payload size and improving perceived load times.",
      "Designed and optimized PostgreSQL queries using JSONB to simplify data models and reduce complex joins.",
      "Secured REST API endpoints with OAuth token validation and access control.",
      "Delivered full-stack features and resolved bugs across frontend and backend in a production environment.",
    ],
  },
  {
    title: "Software Developer Co-op (Python)",
    company: "University of Victoria, Department of Civil Engineering",
    location: "Victoria, BC",
    date: "Sep 2021 – Dec 2021",
    highlights: [
      "Created dashboards for graduate students using Dash and React.",
      "Used Git for version control and merge conflict resolution.",
      "Built an API that downloaded ZIP archives of technical data by country or province from the UVic website.",
    ],
  },
] as const;

export const portfolioProjects = [
  {
    title: "HealthEngine",
    stack: "Next.js 15 · TypeScript · Prisma · Tailwind · shadcn/ui · iron-session",
    liveUrl: "https://healthengine.shayvanpelt.com/",
    repoUrl: null,
    featured: true,
    highlights: [
      "Full-stack fitness tracker for logging workouts, calories, weight, and per-user goals backed by Prisma and typed REST handlers.",
      "Passwordless auth with email OTP, encrypted iron-session cookies, Edge middleware, and Resend for transactional email.",
      "Mobile-first dashboard with Recharts trends, unit-aware display, and PWA configuration for add-to-home-screen installs.",
    ],
  },
  {
    title: "Discord Economy Bot",
    stack: "Python · discord.py · SQLite",
    liveUrl: null,
    repoUrl: "https://github.com/ShayVanPelt/Discord-Bot",
    featured: false,
    highlights: [
      "Discord bot that runs interactive chat games (roulette, blackjack, coinflip) with clear rules and user-facing feedback.",
      "Persists per-user virtual currency and game outcomes in SQLite so balances survive deploys and restarts.",
      "Structured commands and handlers so new games and economy rules could be added without rewriting core flow.",
    ],
  },
  {
    title: "AWS DeepRacer",
    stack: "Python · Reinforcement Learning",
    liveUrl: null,
    repoUrl: "https://github.com/ShayVanPelt/DeepRacer",
    featured: false,
    highlights: [
      "Developed and trained reinforcement learning models for autonomous racing.",
      "Created a custom reward function and competed against other students.",
    ],
  },
  {
    title: "Ottawa Amenities Map",
    stack: "Python · Data Analysis",
    liveUrl: null,
    repoUrl: "https://github.com/ShayVanPelt/Ottawa-Map-Data",
    featured: false,
    highlights: [
      "Combines Ottawa datasets to show average housing cost by neighborhood.",
      "Filters neighborhoods by proximity to amenities.",
    ],
  },
] as const;
