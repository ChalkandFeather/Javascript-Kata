const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error");
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return "This game is a  tie";
  }
};

// if (userChioice === "rock") {
//   if (getComputerChoice === "paper") return console.log("Computer wins");
// } else {
//   return console.log("You win");
// }

// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   if (randomNumber === 0) {
//     return "rock";
//   } else if (randomNumber === 1) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// };

// console.log(getUserChoice("paper"));
// console.log(getComputerChoice());
console.log(determineWinner());
