export function simplify(text) {
  return text
    .replace("welcome to", "welcome")
    .replace("we are", "we")
    .replace("you are", "you");
}

