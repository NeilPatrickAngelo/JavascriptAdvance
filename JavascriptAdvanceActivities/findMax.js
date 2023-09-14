const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of values (N): ', (N) => {
    N = parseInt(N);

    if (!isNaN(N) && N > 0) {
        findMax(N);
    } else {
        console.log('Invalid input. Please enter a valid positive integer.');
        rl.close();
    }
});

function findMax(N) {
    const numbers = [];
    let count = 0, maxNum = 0;

    function arrayNum() {
        rl.question(`Enter number ${count + 1}: `, (input) => {
            const number = parseFloat(input);

            if (!isNaN(number)) {
                numbers.push(number);
                count++;

                if (count < N) {
                    arrayNum();
                } else {
                    maxNum = Math.max(...numbers);
                    console.log(`Numbers entered: ${numbers}`);
                    console.log(`The maximum number from the array is: ${maxNum}`);
                    rl.close();
                }
            } else {
                console.log(`Invalid input. Please enter a valid number.`);
                arrayNum();
            }
        });
    }
    arrayNum();
}
