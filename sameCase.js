function sameCase(a, b) {
  if (
    typeof a !== "string" ||
    typeof b !== "string" ||
    a.length !== 1 ||
    b.length !== 1
  ) {
    throw new Error("Input should contain two single string characters");
  }

  // Rest of the logic to check if a and b are the same case
  // ...
}
//   if (
//     a.toUpperCase() === a.toLowerCase() ||
//     b.toLowerCase() === b.toUpperCase()
//   )
//     return -1

module.exports = sameCase;
