const spellChecker = function (sentence, wordBank) {
  if (typeof sentence !== "string") {
    throw new Error("Input must be a string");
  }

  const words = sentence.split(" ");
  const newSentence = [];
  const checkedWords = words.map((word) => {
    if (!wordBank.includes(word)) {
      newSentence.push(`~${word}~`);
    } else {
      newSentence.push(word);
    }
  });

  return newSentence.join(" ");
};

module.exports = spellChecker;
