let secretMessage = [
  "learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out",
  "-2015",
  "Chris",
  "Pine",
  "Learn",
  "Javascript",
];

secretMessage.pop();
secretMessage.push("to", "program");
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");

console.log(secretMessage);
