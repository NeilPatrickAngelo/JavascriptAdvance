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
            const answer = {
                number11: number1,
                number22: number2,
                Calculator: function() {
                    console.log(`Addition: ${this.number11} + ${this.number22} = ${this.Addition()}.`);
                    console.log(`Subtraction: ${this.number11} - ${this.number22} = ${this.Subtraction()}.`);
                    console.log(`Multiplication: ${this.number11} * ${this.number22} = ${this.Multiplication()}.`);
                    console.log(`Division: ${this.number11} / ${this.number22} = ${this.Division()}.`);
                },
                Addition(){
                    return this.number11 + this.number22;
                },
                Subtraction(){
                    return this.number11 - this.number22;
                },
                Multiplication(){
                    return this.number11 * this.number22;
                },
                Division(){
                    try{
                        if (number2 === 0) {
                            throw new Error("Division by zero.");
                        }
                        return this.number11 / this.number22;
                    }
                    catch(error){
                        return "Division by zero. An error occurred:";
                    }
                },
            }
            answer.Calculator();
        }
    });
});