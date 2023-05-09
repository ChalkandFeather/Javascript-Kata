const sameCase = require("./sameCase");

test("should throw error if input is not a string", () => {
  expect(() => sameCase(1, 2)).toThrow(
    "Input should contain two single string characters"
  );
});

// test("string to ")
// expect(sameCase(a, a)).to be
