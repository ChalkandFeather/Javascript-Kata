function oddOrEven(number) {
  if (number < 0) {
    throw new Error("number must be a positive integer");
  }
  if (number % 2 === 0) return "Even";
  else {
    return "Odd";
  }
}

module.exports = oddOrEven;
