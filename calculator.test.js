const Calculator = require("./calculatingAverages.js");

describe("Calculator", () => {
  describe("#average", () => {
    it("should return 0 for no arguments", () => {
      const result = Calculator.average();
      expect(result).toBe(0);
    });
  });
});
