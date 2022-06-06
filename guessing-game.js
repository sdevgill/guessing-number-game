// Import the readline module into our file
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

// Create an interface where we can talk to the user
const rl = readline.createInterface({ input, output });

// Custom Code

let secretNumber;

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

const randomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The max and min are inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(randomInRange(15, 20)); // 16
// console.log(randomInRange(15, 20)); // 17
// console.log(randomInRange(15, 20)); // 20

// secretNumber = randomInRange(0, 100);

// askGuess();

const askRange = () => {
  rl.question("Enter a min number: ", (minNum) => {
    minNum = Number(minNum);

    rl.question("Enter a max number: ", (maxNum) => {
      maxNum = Number(maxNum);
      console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`);
      secretNumber = randomInRange(minNum, maxNum);
      console.log(secretNumber); // Cheat to immediately print the guess
      // rl.close(); Not needed as it is called inside askGuess();
      askGuess();
    });
  });
};

askRange();
