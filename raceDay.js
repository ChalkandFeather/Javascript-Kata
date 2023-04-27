let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnersAge = 18;
if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnersAge > 18) {
  console.log(`${raceNumber} You will run at 9.30am`);
} else if (!registeredEarly && runnersAge > 18) {
  console.log(`${raceNumber} runs at 11.00am`);
} else if (runnersAge < 18) {
  console.log(`${raceNumber} runs at 12.30`);
} else {
  console.log("Please visit registration desk");
}

module.exports = {
  generateRaceNumber: function () {
    return raceNumber;
  },
};
