const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getSumOfNumbers(N) {
  let sum = 0;
  let count = 0;

 

  function promptForNumber() {
    rl.question(`Enter number ${count + 1}: `, (input) => {
      const number = parseFloat(input);

 

      if (!isNaN(number)) {
        sum += number;
        count++;

 

        if (count < N) {
          promptForNumber();
        } else {
          console.log(`Sum of ${N} numbers is: ${sum}`);
          rl.close();
        }
      } else {
        console.log(`Invalid input. Please enter a valid number.`);
        promptForNumber();
      }
    });
  }

 

  promptForNumber();
}

 

rl.question('Enter the number of values (N): ', (N) => {
  N = parseInt(N);

 

  if (!isNaN(N) && N > 0) {
    getSumOfNumbers(N);
  } else {
    console.log('Invalid input. Please enter a valid positive integer.');
    rl.close();
  }
});