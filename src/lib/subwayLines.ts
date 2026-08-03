// Maps blog categories to MTA subway line colors + bullet labels,
// so tags read like actual line indicators (e.g. the G train is green).
export const LINES: Record<string, { color: string; label: string }> = {
  life: { color: "var(--line-green)", label: "G" },
  code: { color: "var(--line-blue)", label: "A" },
  javascript: { color: "var(--line-yellow)", label: "N" },
  css: { color: "var(--line-purple)", label: "7" },
  node: { color: "var(--line-dkgreen)", label: "4" },
  php: { color: "var(--line-brown)", label: "J" },
  tesla: { color: "var(--line-red)", label: "1" },
  leadership: { color: "var(--line-grey)", label: "L" },
  management: { color: "var(--line-orange)", label: "M" },
  default: { color: "var(--line-teal)", label: "T" },
};

export function lineFor(category?: string) {
  if (!category) return LINES.default;
  return LINES[category.toLowerCase()] ?? LINES.default;
}

// Deterministic fallback color for posts without a category, so the
// line diagram on the homepage still varies stop to stop.
const PALETTE = [
  "var(--line-green)",
  "var(--line-blue)",
  "var(--line-orange)",
  "var(--line-yellow)",
  "var(--line-purple)",
  "var(--line-red)",
];

export function colorForPost(id: string, category?: string) {
  if (category) return lineFor(category).color;
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length];
}
