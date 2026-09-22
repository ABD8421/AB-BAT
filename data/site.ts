/**
 * Single source of truth for identity + links (spec §49, §74).
 *
 * Anything in [SQUARE BRACKETS] is a placeholder the owner must replace.
 * Nothing in this file may be invented — if a fact is unknown, leave the
 * bracketed token in place and the UI will mark it as unverified.
 *
 * Still bracketed, because only the owner can answer them:
 *   [YOUR EMAIL]        — no public address anywhere in the repositories
 *   [YOUR LINKEDIN URL] — not linked from anywhere in the repositories
 */
const DEV_SITE_URL = "http://localhost:3000";

/** Where this site is actually served from (Vercel, plus the GitHub Pages mirror). */
const PRODUCTION_SITE_URL = "https://ab-bat.vercel.app";

/**
 * Handle used when GITHUB_USERNAME is unset or empty.
 * Set this to an empty string to switch the open-source section off entirely.
 */
const DEFAULT_GITHUB_USERNAME = "ABD8421";

/**
 * The URL to fall back to when NEXT_PUBLIC_SITE_URL is missing or malformed.
 * In production the real origin matters: metadataBase, the Open Graph URLs,
 * sitemap.xml and robots.txt are all built from it, and a localhost fallback
 * would publish canonical URLs that do not resolve.
 */
function fallbackSiteUrl(): string {
  return process.env.NODE_ENV === "production" ? PRODUCTION_SITE_URL : DEV_SITE_URL;
}

/**
 * Returns a valid absolute URL for `metadataBase`.
 * Guards against the env var being unset, an empty string, whitespace, or an
 * otherwise invalid value (any of which would make `new URL()` throw and break
 * the production build).
 */
function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return fallbackSiteUrl();
  try {
    return new URL(value).toString().replace(/\/$/, "");
  } catch {
    return fallbackSiteUrl();
  }
}

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
    github: "https://github.com/ABD8421",
    linkedin: "[YOUR LINKEDIN URL]",
    x: "",
  },

  /**
   * GitHub handle used by lib/github.ts. An empty string disables the section.
   *
   * `??` alone is not enough here: hosting dashboards frequently hold an
   * environment variable that exists but is empty, and an empty string is not
   * nullish, so it would win over the default and switch the section off. Trim
   * first, then fall back — an empty or whitespace-only value means "not set".
   * To disable the section deliberately, set DEFAULT_GITHUB_USERNAME to "".
   */
  githubUsername: (process.env.GITHUB_USERNAME ?? "").trim() || DEFAULT_GITHUB_USERNAME,

  /** Place the real file at public/resume/abdullah-al-anser-cv.pdf before launch. */
  resumePath: "/resume/abdullah-al-anser-cv.pdf",

  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
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
