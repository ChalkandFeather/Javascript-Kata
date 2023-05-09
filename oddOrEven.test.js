const oddOrEven = require("./oddOrEven");

test("should return even for a even integer", () => {
  expect(oddOrEven(2)).toBe("Even");
});

test("should return even for a even integer", () => {
  expect(oddOrEven(1)).toBe("Odd");
});
