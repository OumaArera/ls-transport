/**
 * Shared background textures for dark sections. Both echo the logo's highway
 * motif: fine diagonal hatching for asphalt, and a lane marking for movement.
 */

export function AsphaltTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.14]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(115deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 13px)',
      }}
    />
  );
}

/** A single gold lane marking sweeping across a dark band. */
export function LaneMarking({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 h-24 w-full ${className}`}
    >
      <path
        d="M0 110 C 260 110, 380 24, 640 22 C 880 20, 1010 74, 1200 78"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.35"
      />
      <path
        d="M0 110 C 260 110, 380 24, 640 22 C 880 20, 1010 74, 1200 78"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="22 26"
        className="lane-dash"
      />
    </svg>
  );
}
