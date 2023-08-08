const Calculator = {
  average: function () {
    if (arguments.length === 0) {
      return 0; // If no arguments, return 0
    } else {
      let total = 0;

      for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]; // Add up all the arguments
      }

      return total / arguments.length; // Calculate and return the average
    }
  },
};

module.exports = Calculator;
