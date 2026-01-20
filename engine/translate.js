import { normalize } from "./normalize.js";
import { simplify } from "./simplify.js";
import { reorder } from "./reorder.js";
import { dictionary } from "./dictionary.js";

export function translate(text) {
  const normalized = normalize(text);
  const simplified = simplify(normalized);
  const words = simplified.split(/\s+/);

  const gloss = reorder(words)
    .map(word => dictionary[word])
    .filter(Boolean);

  return gloss.join(" ");
}

