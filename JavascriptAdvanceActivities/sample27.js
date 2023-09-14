const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number: ", (userInput) => {
  try {
    const parsedInput = parseFloat(userInput);
  if (isNaN(parsedInput)) {
      throw new Error("Invalid input: Not a number.");
   }
  if (parsedInput === 0) {
      throw new Error("Division by zero.");
    }
  const result = 10 / parsedInput;
  console.log("Result:", result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    rl.close(); // Close the readline interface in the finally block
    console.log("Finally block executed.");
  }
});