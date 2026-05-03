const fs = require("fs");

const words = fs
  .readFileSync("wordle-answers-alphabetical.txt", "utf-8")
  .split("\n")
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const output = `const validWords = ${JSON.stringify(words, null, 2)};\n\nexport default validWords;`;

fs.writeFileSync("targetWords.js", output);

console.log("Conversion complete!");