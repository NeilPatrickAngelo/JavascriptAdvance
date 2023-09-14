const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 

// Function to calculate the factorial of a number
function calculateFactorial(number) {
  if (number < 0) {
throw new Error("Factorial is not defined for negative numbers.");
  }
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
factorial *= i;
  }
  return factorial;
}

 

// Main program
function main() {
  rl.question("Enter a non-negative integer to calculate its factorial: ", (input) => {
try {
const number = parseInt(input);

 

if (isNaN(number)) {
  throw new Error("Invalid input. Please enter a valid integer.");
}

 

const factorial = calculateFactorial(number);
console.log(`The factorial of ${number} is ${factorial}`);
} catch (error) {
console.error(`Error: ${error.message}`);
} finally {
rl.close();
}
  });
}

 

// Run the main program
main();