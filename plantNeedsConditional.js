const plantNeedsWater = function (day) {
  if (typeof day !== "string") {
    console.log("day must be a string");
    throw new Error("day must be a string");
  }

  if (day === "Wednesday") {
    console.log("Water today");
    return true;
  } else {
    console.log("No need to water today");
    return false;
  }
};

module.exports = plantNeedsWater;
