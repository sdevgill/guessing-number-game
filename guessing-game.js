// Import the readline module into our file
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

// Create an interface where we can talk to the user
const rl = readline.createInterface({ input, output });

// Initialize secretNumber variable to be assigned to random number later
let secretNumber;

// Initialize variable to limit user attempts
let numAttempts;

// Check user guess
const checkGuess = (num) => {
  if (num > secretNumber) {
    console.log("Too high.");
    console.log(`You have ${numAttempts} guesses left.`);
    return false;
  } else if (num < secretNumber) {
      console.log("Too low.");
      console.log(`You have ${numAttempts} guesses left.`);
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
    numAttempts--;
    console.log(`You guessed: ${answer}`);
    let result = checkGuess(Number(answer));

    if (result === true) {
      console.log("You WIN!");
      rl.close();
    } else if (result === false && numAttempts === 0) {
      console.log("You LOSE!");
      console.log(`The secret number was ${secretNumber}`);
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

// Limit turns dynamically
const askLimit = () => {
  rl.question("Enter max number of guesses allowed: ", (max) => {
    console.log(`You entered ${max} max guesses`);
    numAttempts = Number(max);
    askRange();
  });
}

askLimit();
