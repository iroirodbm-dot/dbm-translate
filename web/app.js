import { translate } from "../engine/translate.js";

document.getElementById("translate").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const output = translate(input);
  document.getElementById("output").textContent = output;
});

