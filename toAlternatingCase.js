String.prototype.toAlternatingCase = function () {
  let chars = this.split("");
  chars.forEach((char, index) => {
    chars[index] =
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
  });
  return chars.join("");
};

console.log("bonJOuR WORLD".toAlternatingCase());

// String.prototype.toAlternatingCase = function () {
//   return this.split("")
//     .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//     .join("");
// };

// console.log("hello WORLD".toAlternatingCase());
