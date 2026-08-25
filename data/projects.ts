import type { Project, ProjectCategory } from "@/lib/types";

/**
 * CASE FILES (spec §20–§23).
 *
 * These three entries are STRUCTURAL PLACEHOLDERS. Every string in brackets
 * must be replaced with real work before this site goes live. Do not publish a
 * project you did not build, and do not claim a metric you cannot evidence
 * (spec §74).
 *
 * Adding a project = adding an object here. No component changes required.
 */
export const projects: Project[] = [
  {
    slug: "case-001-placeholder-web-platform",
    caseNumber: "001",
    title: "[PROJECT NAME]",
    tagline: "[ONE LINE — what it does and for whom]",
    summary:
      "[SHORT DESCRIPTION — two or three sentences covering the problem, what you built and the outcome. Replace before launch.]",
    category: "web",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    status: "completed",
    year: "[YEAR]",
    links: { live: "", repo: "" },
    featured: true,
    gallery: [],
    placeholder: true,
    caseStudy: {
      overview: "[OVERVIEW — what the product is, in plain language.]",
      problem: "[PROBLEM — the situation before this project existed.]",
      objective: "[OBJECTIVE — what success was defined as, and by whom.]",
      solution: "[SOLUTION — the approach you chose and why you chose it over the alternatives.]",
      features: ["[KEY FEATURE 1]", "[KEY FEATURE 2]", "[KEY FEATURE 3]"],
      architecture:
        "[ARCHITECTURE — client, server, data store, third-party services, and how a request flows through them.]",
      role: "[YOUR ROLE — be exact. Solo? Team of four? Which parts were yours?]",
      implementation: [
        "[IMPLEMENTATION NOTE — a decision you made and its trade-off.]",
        "[IMPLEMENTATION NOTE — something non-obvious you had to handle.]",
      ],
      challenges: [
        { challenge: "[CHALLENGE]", resolution: "[HOW YOU RESOLVED IT]" },
        { challenge: "[CHALLENGE]", resolution: "[HOW YOU RESOLVED IT]" },
      ],
      results: ["[RESULT — only what you can evidence. No invented numbers.]"],
      lessons: ["[WHAT YOU'D DO DIFFERENTLY NEXT TIME]"],
    },
  },
  {
    slug: "case-002-placeholder-mobile-app",
    caseNumber: "002",
    title: "[PROJECT NAME]",
    tagline: "[ONE LINE — what it does and for whom]",
    summary: "[SHORT DESCRIPTION — replace before launch.]",
    category: "mobile",
    tech: ["Flutter", "Dart", "Firebase"],
    status: "completed",
    year: "[YEAR]",
    links: { live: "", repo: "" },
    featured: true,
    gallery: [],
    placeholder: true,
  },
  {
    slug: "case-003-placeholder-ml-project",
    caseNumber: "003",
    title: "[PROJECT NAME]",
    tagline: "[ONE LINE — what it does and for whom]",
    summary: "[SHORT DESCRIPTION — replace before launch.]",
    category: "ai",
    tech: ["Python", "scikit-learn"],
    status: "in-progress",
    year: "[YEAR]",
    links: { live: "", repo: "" },
    featured: false,
    gallery: [],
    placeholder: true,
  },
];

export const projectFilters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI / ML" },
  { id: "desktop", label: "Desktop" },
  { id: "iot", label: "IoT" },
  { id: "academic", label: "Academic" },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Projects that share a category, excluding the current one. */
export function getRelatedProjects(slug: string, limit = 2): Project[] {
  const current = getProject(slug);
  if (!current) return [];
  return projects.filter((p) => p.slug !== slug && p.category === current.category).slice(0, limit);
}
