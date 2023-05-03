const spellChecker = require("./reviewPractice");

test("should throw error if input is not a string", () => {
  expect(() => spellChecker(123)).toThrow("Input must be a string");
});

test("should not throw error if input is a string", () => {
  expect(() => spellChecker("This is a string")).not.toThrow();
});
