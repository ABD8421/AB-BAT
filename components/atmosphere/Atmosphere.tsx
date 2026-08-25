import dynamic from "next/dynamic";

/**
 * Gotham backdrop (spec §12, §46).
 * Skyline, glow, grid and grain are pure CSS and cost nothing. Only the rain
 * is JavaScript, and it is code-split so it never blocks first paint.
 */
const Rain = dynamic(() => import("@/components/atmosphere/Rain").then((m) => m.Rain));

export function Atmosphere() {
  return (
    <div className="atmos" aria-hidden="true">
      <div className="atmos__glow" />
      <div className="atmos__grid" />
      <div className="atmos__skyline" />
      <Rain />
      <div className="atmos__noise" />
    </div>
  );
}
