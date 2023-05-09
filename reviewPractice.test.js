const spellChecker = require("./reviewPractice");

test("should throw error if input is not a string", () => {
  expect(() => spellChecker(123)).toThrow("Input must be a string");
});

test("should not throw error if input is a string", () => {
  expect(() => spellChecker("This is a string", [])).not.toThrow();
});

test("should replace misspelled word with a ~word~", () => {
  const wordBank = ["I", "like", "to", "eat", "and"];
  expect(spellChecker("I like to eat appel", wordBank)).toEqual(
    "I like to eat ~appel~"
  );
});

test("should replace misspelled word with a ~word~", () => {
  const wordBank = ["I", "like", "to", "eat", "and"];
  expect(spellChecker("I like to eat appel and peache", wordBank)).toEqual(
    "I like to eat ~appel~ and ~peache~"
  );
});

test("should replace misspelled words case-insensitively", () => {
  const wordBank = ["I", "like", "to", "eat", "and"];
  expect(spellChecker("I LIke to eAT apPle and BananAs", wordBank)).toEqual(
    "I ~LIke~ to ~eAT~ ~apPle~ and ~BananAs~"
  );
});
