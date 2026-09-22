import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";
import { Unverified } from "@/components/ui/Unverified";
import { externalLinkProps, isPlaceholderText } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Developer dossier",
  description: `Résumé of ${site.name} — ${site.role}.`,
  alternates: { canonical: "/resume" },
};

/**
 * Developer dossier (spec §32).
 * The page is the résumé; the PDF is a download of the same facts. Keep them in
 * sync — a page that contradicts the PDF costs you the interview.
 */
export default function ResumePage() {
  return (
    <div className="shell" style={{ paddingTop: "8rem", paddingBottom: "var(--space-6)" }}>
      <header className="section__head">
        <div>
          <p className="eyebrow">Developer dossier</p>
          <h1 className="section__title" style={{ fontSize: "var(--step-4)" }}>Résumé</h1>
          <p className="section__lede">{site.name} — {site.role}, {site.location}</p>
        </div>
      </header>

      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
        <a className="btn btn--primary" href={site.resumePath} download>Download PDF</a>
        <a className="btn" href={site.resumePath} target="_blank" rel="noopener noreferrer">Open in new tab</a>
      </div>

      <p className="gallery__empty" style={{ marginBottom: "var(--space-4)" }}>
        Before launch: place the real file at <code>public{site.resumePath}</code>. Until then both
        buttons above will 404 — that is deliberate, so a missing file cannot be missed.
      </p>

      <div className="stack">
        <Block title="Professional summary">
          <p>
            Full stack developer based in {site.location}, working across web, mobile and backend:
            React and Next.js for interfaces, Node.js and REST APIs on the server, Flutter for
            cross-platform applications, and SQL or document databases underneath. Comfortable
            owning a feature from data model to interface — schema, endpoints, validation, state
            and the deployed build. The case files in this dossier are the honest record of what I
            have built so far, and each one links to its source.
          </p>
        </Block>

        <Block title="Profiles">
          <ul className="list-check">
            <li>
              GitHub —{" "}
              <a href={site.links.github} {...externalLinkProps}>{site.links.github}</a>
            </li>
            <li>
              Email —{" "}
              {isPlaceholderText(site.email) ? (
                <span>{site.email} <span className="flag-unverified">Replace</span></span>
              ) : (
                <a href={`mailto:${site.email}`}>{site.email}</a>
              )}
            </li>
            {site.links.linkedin ? (
              <li>
                LinkedIn —{" "}
                {isPlaceholderText(site.links.linkedin) ? (
                  <span>{site.links.linkedin} <span className="flag-unverified">Replace</span></span>
                ) : (
                  <a href={site.links.linkedin} {...externalLinkProps}>{site.links.linkedin}</a>
                )}
              </li>
            ) : null}
          </ul>
        </Block>

        <Block title="Skills">
          <ul className="card__tags">
            {skills.map((skill) => (
              <li key={skill.name} className="tag">{skill.name}</li>
            ))}
          </ul>
        </Block>

        <Block title="Experience">
          {experience.length === 0 ? (
            <p className="meta">No entries recorded.</p>
          ) : (
            <ul className="stack">
              {experience.map((item) => (
                <li key={item.id}>
                  <p style={{ fontWeight: 650, margin: 0 }}>
                    <Unverified value={item.role} /> — <Unverified value={item.organization} />
                  </p>
                  <p className="meta" style={{ margin: 0 }}>{item.start} — {item.end}</p>
                </li>
              ))}
            </ul>
          )}
        </Block>

        <Block title="Education">
          <ul className="stack">
            {education.map((item) => (
              <li key={item.id}>
                <p style={{ fontWeight: 650, margin: 0 }}><Unverified value={item.degree} /></p>
                <p className="meta" style={{ margin: 0 }}>
                  <Unverified value={item.institution} /> · {item.start} — {item.end}
                </p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Selected projects">
          <ul className="list-check">
            {projects.map((project) => (
              <li key={project.slug}>
                #{project.caseNumber}{" "}
                <Link href={`/projects/${project.slug}`}>
                  <Unverified value={project.title} />
                </Link>{" "}
                — {project.tech.join(", ")}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Certifications">
          <ul className="list-check">
            {certificates.map((certificate) => (
              <li key={certificate.id}>
                <Unverified value={certificate.name} /> — <Unverified value={certificate.issuer} />
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case__block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
