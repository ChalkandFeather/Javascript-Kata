let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnersAge = 19;
if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}

module.exports = {
  generateRaceNumber: function () {
    return raceNumber;
  },
};
