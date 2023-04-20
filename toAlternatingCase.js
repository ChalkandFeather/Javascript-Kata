String.prototype.toAlternatingCase = function () {
  let chars = this.split("");
  for (let i = 0; i < chars.length; i++) {
    chars[i] =
      chars[i].toUpperCase() === chars[i]
        ? chars[i].toLowerCase()
        : chars[i].toUpperCase();
  }
  return chars.join("");
};

console.log("hello WORLD".toAlternatingCase());

// String.prototype.toAlternatingCase = function () {
//   let chars = this.split("");
//   chars.forEach((char, index) => {
//     chars[index] = char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
//   });
//   return chars.join("");
// }
