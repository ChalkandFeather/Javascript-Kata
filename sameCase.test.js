const sameCase = require("./sameCase");

test("should throw error if input is not a string", () => {
  expect(() => sameCase()).toThrow(
    "Input should contain two single string characters"
  );
});

test("should throw error if only one input is not a string", () => {
  expect(() => sameCase(1)).toThrow(
    "Input should contain two single string characters"
  );
});

test("should throw error if input is not a string", () => {
  expect(() => sameCase(1, 2)).toThrow(
    "Input should contain two single string characters"
  );
});

// test("string to ")
// expect(sameCase(a, a)).to be
