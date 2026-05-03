const fs = require("fs");

const words = fs
  .readFileSync("words.txt", "utf-8")
  .split("\n")
  .map(word => word.trim().toUpperCase())
  .filter(Boolean);

const output = `const validWords = ${JSON.stringify(words, null, 2)};\n\nexport default validWords;`;

fs.writeFileSync("validWords.js", output);

console.log("Conversion complete!");