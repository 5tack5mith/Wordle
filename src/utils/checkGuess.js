function checkGuess(guess, target) {
  const guessLetters = guess.split("");
  const targetLetters = target.split("");
  const result = Array(5).fill("absent");

  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = "correct";
      targetLetters[i] = null;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] === "correct") continue;

    const foundIndex = targetLetters.indexOf(guessLetters[i]);

    if (foundIndex !== -1) {
      result[i] = "present";
      targetLetters[foundIndex] = null;
    }
  }

  return result;
}

export default checkGuess;