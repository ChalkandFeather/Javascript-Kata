// The scope of 'random' is too loose

const random = (random = Math.floor(Math.random() * 3));

const getRandEvent = () => {
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 3) {
    return "Pentathlon";
  }
};

// The scope of 'days' is too tight
const getTrainingDays = (event) => {
  if (event === "Marathon") {
    let days = 50;
  } else if (event === "Triathlon") {
    let days = 100;
  } else if (event === "Pentathlon") {
    let days = 200;
  }

  return days;
};

// The scope of "name is too tight
const logEvent = (event) => {
  const name = "Nola";
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days) => {
  const name = "Nola";
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// define a 'name' variable. Use is as an arguement after updating logEvent and logTime
