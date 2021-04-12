const readline = require('readline-sync');

let points = 0
let user = readline.question("Welcome, Can I know your name:\n");

user = user.charAt(0).toUpperCase() + user.slice(1);

console.log("Welcome", user + " Let's Begin :)");

const question = [
  {
    ques: "Where do I live?",
    ans: "SURAT"
  },
  {
    ques: "What's my favorite food?",
    ans: "PIZZA"
  },
  {
    ques: "which is my favorite programming language?",
    ans: "JAVASCRIPT"
  },
  {
    ques: "Who's my favorite cricketer?",
    ans: "VIRAT KOHLI"
  }
];

function checkAnswers(ans, res) {
  if (ans == res.toUpperCase()) {
    points++;
    console.log("Correct Answer :)\nPoints = " + points);
  } else {
    console.log("Wrong Answer :(\nPoints = " + points);
    console.log("The Correct Answer is:", ans)
  }
}

for (let i in question) {
  const res = readline.question(question[i].ques + "\n");
  checkAnswers(question[i].ans, res);
}

console.log(`Thanks ${user}\nYour final points is ${points} !`);