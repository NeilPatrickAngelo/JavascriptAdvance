const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter a positive whole number: ", (input ) => {
    rl.close();
    if (!isNaN(input )) {
        if(input  == 1){
            console.log("1 is neither prime nor composite number.");
        }
        else if(input  > 1){
            if (isPrime(input )) {
                console.log(`${input } is a prime number`);
            } else {
                console.log(`${input } is a not prime number`);
            }
        }
        else{
            console.log(`${input } is less than 0.`);
        }

    } else {
        console.log(`${input } is not a positive whole number`);
    }
});

function isPrime(inputNum) {
    let checkNum = true;
    for (let i = 2; i < inputNum; i++) {
        if (inputNum % i == 0) {
            checkNum = false;
            break;
        }
    }
    return checkNum;
}