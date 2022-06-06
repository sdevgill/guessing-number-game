// Import the readline module into our file
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

// Create an interface where we can talk to the user
const rl = readline.createInterface({ input, output });

// Custom Code

let secretNumber = 42;

const checkGuess = (num) => {
  if (num > secretNumber) {
    console.log("Too high.");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low.");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
};

const askGuess = () => {
  rl.question("Enter a guess: ", (answer) => {
    console.log(`You guessed: ${answer}`);
    let numAnswer = Number(answer);

    let result = checkGuess(numAnswer);

    if (result === true) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess();
    }
  });
};

askGuess();
