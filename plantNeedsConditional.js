const plantNeedsWater = function (day) {
  if (typeof day !== "string") {
    throw new Error("day must be a string");
  }

  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

module.exports = plantNeedsWater;
