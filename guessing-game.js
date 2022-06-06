// Import the readline module into our file
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

// Create an interface where we can talk to the user
const rl = readline.createInterface({ input, output });

// Ask user a question
rl.question('What do you think of Node.js? ', (answer) => {
  // Log their answer
  console.log(`Thank you for your valuable feedback: ${answer}`);
  // Close the interface
  rl.close();
});


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
