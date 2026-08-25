/**
 * Single source of truth for identity + links (spec §49, §74).
 *
 * Anything in [SQUARE BRACKETS] is a placeholder the owner must replace.
 * Nothing in this file may be invented — if a fact is unknown, leave the
 * bracketed token in place and the UI will mark it as unverified.
 */
export const site = {
  name: "Abdullah Al Anser",
  shortName: "ANSER",
  role: "Full Stack Developer",
  focus: "Web / Mobile / AI / Backend / Cloud",
  location: "Bangladesh",
  tagline: "Building modern digital experiences through code, creativity and technology.",
  stackLine: ["React", "Next.js", "Node.js", "Flutter", "AI", "Cloud"],

  /** Set to false if it stops being true. Do not display a status you cannot honour. */
  availability: {
    open: true,
    label: "Open to opportunities",
  },

  email: "[YOUR EMAIL]",
  links: {
    github: "[YOUR GITHUB URL]",
    linkedin: "[YOUR LINKEDIN URL]",
    x: "",
  },

  /** GitHub handle used by lib/github.ts. Empty string disables the section. */
  githubUsername: process.env.GITHUB_USERNAME ?? "",

  /** Place the real file at public/resume/abdullah-al-anser-cv.pdf before launch. */
  resumePath: "/resume/abdullah-al-anser-cv.pdf",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;
