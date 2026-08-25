import type { Experience } from "@/lib/types";

/**
 * MISSION LOG (spec §24). Never invent employment history.
 * If you have no professional roles yet, delete every entry — the section
 * hides itself automatically when this array is empty, which is far better
 * than a fabricated job.
 */
export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "[ROLE TITLE]",
    organization: "[ORGANISATION]",
    start: "[MONTH YEAR]",
    end: "Present",
    location: "[LOCATION / REMOTE]",
    responsibilities: ["[WHAT YOU WERE ACCOUNTABLE FOR]", "[WHAT YOU SHIPPED]"],
    technologies: ["[TECH]", "[TECH]"],
    achievements: ["[SOMETHING MEASURABLE YOU CAN EVIDENCE]"],
    placeholder: true,
  },
];
