import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

/**
 * About (spec §15).
 * The photograph slot is intentionally an empty frame until a real image
 * exists at public/images/portrait.jpg — a fake stock portrait would
 * undermine everything else on the page.
 */
export function About() {
  return (
    <Section
      id="about"
      eyebrow="Batcomputer // Developer profile"
      title="About"
      index="Sector 02"
      lede="Who is behind the work, how the work gets made, and what it is aimed at."
    >
      <div className="grid grid--2">
        <Reveal>
          <div className="panel panel--hud" style={{ display: "grid", gap: "1rem" }}>
            <div
              className="gallery__empty"
              style={{ aspectRatio: "4 / 5", display: "grid", placeContent: "center" }}
            >
              <p className="meta" style={{ margin: 0 }}>Portrait</p>
              <p style={{ fontSize: "0.85rem", margin: 0 }}>
                Add public/images/portrait.jpg, then swap this block for
                next/image with width, height and alt text.
              </p>
            </div>
            <p className="meta" style={{ margin: 0 }}>{site.location}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="stack">
            <div>
              <h3 style={{ fontSize: "var(--step-2)" }}>Full stack developer</h3>
              <p style={{ color: "var(--text-dim)" }}>
                [BIOGRAPHY — two short paragraphs in your own voice. What you build, what you
                are strongest at, and what kind of problem you want next. Write it yourself;
                a portfolio bio written by someone else reads like one.]
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--step-1)" }}>How I work</h3>
              <ul className="list-check">
                <li>Understand the problem and the constraints before choosing a stack.</li>
                <li>Type the data model first — most bugs are shape mismatches.</li>
                <li>Ship small, reviewable increments rather than one large drop.</li>
                <li>Treat accessibility, performance and security as build steps, not clean-up.</li>
              </ul>
            </div>

            <dl className="panel dossier__body" style={{ padding: "var(--space-2)" }}>
              <div className="dossier__row"><dt>Name</dt><dd>{site.name}</dd></div>
              <div className="dossier__row"><dt>Role</dt><dd>{site.role}</dd></div>
              <div className="dossier__row"><dt>Focus</dt><dd>{site.focus}</dd></div>
              <div className="dossier__row">
                <dt>Status</dt>
                <dd>{site.availability.open ? site.availability.label : "Not currently available"}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
