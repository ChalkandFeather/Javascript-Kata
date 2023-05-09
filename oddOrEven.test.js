const oddOrEven = require("./oddOrEven");

test("should throw error if input is not a positive integer", () => {
  expect(() => oddOrEven(-1)).toThrow("number must be a positive integer");
});

test("should return even for a even integer", () => {
  expect(oddOrEven(2)).toBe("Even");
});

test("should return even for a even integer", () => {
  expect(oddOrEven(1)).toBe("Odd");
});
