import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

/**
 * About (spec §15).
 * The photograph slot is intentionally an empty frame until a real image
 * exists at public/images/portrait.jpg — a fake stock portrait would
 * undermine everything else on the page.
 *
 * The biography below is written only from facts already in the data files
 * (role, focus, location, the case files and the stack). It is a starting
 * point, not a finished voice — rewrite it in your own words before launch.
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
                Deliberately empty. Add public/images/portrait.jpg and swap this block for
                next/image with width, height and alt text — a stock photograph would be the
                only untrue thing on the page.
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
                I am a full stack developer based in {site.location}, working across web, mobile
                and backend. React and Next.js for interfaces, Node.js and REST APIs on the
                server, Flutter when the work has to leave the browser, and SQL or document
                databases underneath. The case files above are the work I would put in front of
                someone first, and every one of them links to the source it was built from.
              </p>
              <p style={{ color: "var(--text-dim)" }}>
                I work best on problems where the data model decides the shape of the solution. On
                this site that principle is taken literally: the projects, the statistics, the
                skills and the résumé are all generated from a handful of typed data files, so a
                fact appears in exactly one place and the page cannot claim something the data
                does not contain.
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
