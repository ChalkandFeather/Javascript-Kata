function sameCase(a, b) {
  if (
    typeof a !== "string" ||
    typeof b !== "string" ||
    a.length !== 1 ||
    b.length !== 1
  ) {
    throw new Error("Input should contain two single string characters");
  }
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  )
    return -1;
}

module.exports = sameCase;
