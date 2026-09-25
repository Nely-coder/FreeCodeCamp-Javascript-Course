const questions = [
  {
    category: "Chess",
    question: "Which piece is the best?",
    choices: ["pawn", "bishop", "queen"],
    answer: "queen"
  },
  {
    category: "Piano",
    question: "Which chord is the most common?",
    choices: ["C chord", "G chord", "F chord"],
    answer: "C chord"
  },
  {
    category: "Music",
    question: "Which genre is the most dominant?",
    choices: ["hiphop", "gospel", "pop"],
    answer: "pop"
  },
  {
    category: "Media",
    question: "Which tv station is the best?",
    choices: ["Citi", "Gtv", "tv3"],
    answer: "Citi"
  },
  {
    category: "Coding",
    question: "Which language is the best?",
    choices: ["Python", "C#", "Javascript"],
    answer: "Javascript"
  }
];

function getRandomQuestion (arrQ) {
  let randomQuestion = Math.floor(Math.random()*arrQ.length);
  return arrQ[randomQuestion];
}

function getRandomComputerChoice (arrChoices) {
  let randomChoice = Math.floor(Math.random()*arrChoices.length);
  return arrChoices[randomChoice];
}

function getResults (questionObj, compChoice ) {
  if (questionObj.answer == compChoice) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObj.answer;
  }
}