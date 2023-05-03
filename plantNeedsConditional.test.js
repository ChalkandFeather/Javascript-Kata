const plantNeedsWater = require("./plantNeedsConditional");

test("if it is Wednesday, the plant needs to be watered", () => {
  expect(plantNeedsWater("Wednesday")).tobe(true);
});
