// Import the readline module into our file
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

// Create an interface where we can talk to the user
const rl = readline.createInterface({ input, output });

// Declare secretNumber variable to be assigned to random number later
let secretNumber;

// Check user guess
const checkGuess = (num) => {
  if (num > secretNumber) {
    console.log("Too high.");
    return false;
  } else if (num < secretNumber) {
      console.log("Too low.");
      return false;
  } else if (num === secretNumber) {
      console.log("Correct!");
      return true;
  } else {
      return false;
  }
};

// Ask user to guess and check against secretNumber
const askGuess = () => {
  rl.question("Enter a guess: ", (answer) => {
    console.log(`You guessed: ${answer}`);
    let result = checkGuess(Number(answer));

    if (result === true) {
      console.log("You win!");
      rl.close();
    } else {
        askGuess();
    }
  });
};

// Generate random integer between min and max
const randomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The max and min are inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Ask user for min and max numbers to send them to randomInRange
// Assign secretNumber to the result
// Call askGuess() to initialize game
const askRange = () => {
  rl.question("Enter a min number: ", (min) => {
    rl.question("Enter a max number: ", (max) => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      secretNumber = randomInRange(Number(min), Number(max));
      console.log(secretNumber); // Cheat to immediately print the guess
      // rl.close(); Not needed as it is called inside askGuess();
      askGuess();
    });
  });
};

askRange();
