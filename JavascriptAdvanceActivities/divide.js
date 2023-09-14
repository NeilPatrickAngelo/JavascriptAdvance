const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your first number: ", (input1) => {
    rl.question("Enter your second number: ", (input2) => {
        rl.close();
        const number1 = parseInt(input1), number2 = parseInt(input2);
        if(isNaN(number1) || isNaN(number2) || number1==='' && number2===''){
            console.log("Invalid input. Please enter a valid integer.");
        }
        else{
            divide(number1, number2);
        }
        
    });
});

function divide(number1, number2) {
    try{
        if (number2 === 0) {
            throw new Error("Division by zero.");
        }
        const answer = number1 / number2;
        console.log(`Result: ${answer }`);
    }
    catch(error){
        console.error("An error occurred:", error.message);
    }
}
