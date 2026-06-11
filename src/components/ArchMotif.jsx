/* Concentric arch ornament drawn from the LUXYN logo.
   tone="light" renders for ivory backgrounds, tone="dark" for navy bands. */
export default function ArchMotif({ tone = "light", className }) {
  const colors =
    tone === "dark"
      ? { outer: "#7E97A0", mid: "#FBF8F1", inner: "#C2A06B", base: "#7E97A0" }
      : { outer: "#7E97A0", mid: "#1E3A5F", inner: "#C2A06B", base: "#9A958B" };

  return (
    <svg className={className} viewBox="0 0 400 206" fill="none" aria-hidden="true">
      <path d="M40 200 A160 160 0 0 1 360 200" stroke={colors.outer} strokeOpacity="0.55" />
      <path d="M72 200 A128 128 0 0 1 328 200" stroke={colors.mid} strokeOpacity="0.7" />
      <path d="M104 200 A96 96 0 0 1 296 200" stroke={colors.inner} strokeWidth="1.5" />
      <line x1="8" y1="200" x2="392" y2="200" stroke={colors.base} strokeOpacity="0.5" />
      <circle cx="200" cy="200" r="4.5" fill={colors.inner} />
    </svg>
  );
}

/* Small arch glyph for the wordmark. */
export function ArchGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 36 22" fill="none" aria-hidden="true">
      <path d="M4 19 A14 14 0 0 1 32 19" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="19" x2="36" y2="19" stroke="currentColor" strokeOpacity="0.45" />
      <circle cx="18" cy="19" r="2.4" fill="currentColor" />
    </svg>
  );
}
