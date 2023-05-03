const plantNeedsWater = require("./plantNeedsConditional");

test("if it is Wednesday, the plant needs to be watered", () => {
  expect(plantNeedsWater("Wednesday")).toBe(true);
});

// With this test, we're ensuring that our plantNeedsWater function only accepts a string parameter, and will throw an error if it's called with any other type of data.

test("plantNeedsWater should accept a string parameter", () => {
  expect(() => {
    plantNeedsWater(123);
  }).toThrow();
});

test("if it is any other day of the week, the plant doesn't need to be watered", () => {
  expect(plantNeedsWater("Tuesday")).toBe(false);
});
