const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter a string: ", (userInput) => {
    rl.close();
    const convert = convertToNumber(userInput);
    if (convert != null){
        console.log(`String can be converted to a Number: ${convert}`);
    } else {
        console.log("String cannot be converted to a Number.");
    }
});

function convertToNumber(inputString) {
    let convert = null;
    if (!isNaN(inputString)){
        return parseFloat(inputString);
    } else {
        return convert;
    }
}
