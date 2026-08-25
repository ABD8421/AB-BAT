import type { Education } from "@/lib/types";

/** ACADEMIC RECORD (spec §25). */
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "[INSTITUTION]",
    degree: "[DEGREE]",
    department: "[DEPARTMENT]",
    start: "[YEAR]",
    end: "[YEAR OR EXPECTED YEAR]",
    cgpa: "[CGPA — delete this field if you would rather not publish it]",
    coursework: ["[COURSE]", "[COURSE]", "[COURSE]"],
    highlights: ["[ACADEMIC PROJECT OR ACHIEVEMENT]"],
    placeholder: true,
  },
];
