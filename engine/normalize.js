export function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/\b(a|an|the|is|are|was|were|to)\b/g, "")
    .trim();
}
