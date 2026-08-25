import type { Achievement, Certificate } from "@/lib/types";

/**
 * AUTHORIZED ACCESS (spec §26) — genuine credentials only.
 * A verifyUrl that 404s is worse than no certificate at all.
 */
export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "[CERTIFICATE NAME]",
    issuer: "[ISSUING ORGANISATION]",
    issued: "[MONTH YEAR]",
    credentialId: "[CREDENTIAL ID]",
    verifyUrl: "",
    placeholder: true,
  },
];

/** MISSION RECORD (spec §27). Delete entries you cannot evidence. */
export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "[ACHIEVEMENT]",
    detail: "[WHAT IT WAS AND WHAT YOU DID]",
    year: "[YEAR]",
    placeholder: true,
  },
];
