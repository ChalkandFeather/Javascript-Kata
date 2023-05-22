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

  if (getUserChoice === "rock") {
    if (getComputerChoice === "paper") return "Computer wins";
  } else {
    return "You win";
  }

  if (getUserChoice === "scissors") {
    if (getComputerChoice === "paper") return "You win";
  } else {
    return "Computer wins";
  }
};

playGame = () => {
  const userChoice = getUserChoice("rock");
  console.log("You threw: " + userChoice);
  const computerChoice = getComputerChoice();
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
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
// console.log(determineWinner("rock", "paper"));
