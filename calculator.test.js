const Calculator = require("./calculatingAverages.js");

describe("Calculator", () => {
  describe("#average", () => {
    it("should return 0 for no arguments", () => {
      const result = Calculator.average();
      expect(result).toBe(0);
    });

    it("should return the argument value for a single argument", () => {
      const result = Calculator.average(5);
      expect(result).toBe(5);
    });

    it("should handle non-integer arguments correctly", () => {
      const result = Calculator.average(2, 3, Number("4"), 5, 6.5);
      expect(result).toBeCloseTo(4.1, 1); // Check within 1 decimal place
    });
  });
});
