const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter a string: ", (userInput) => {
    rl.close();
    if (userInput) {
        const vowelCount = countVowels(userInput);

        console.log(`Number of Vowels: ${vowelCount}`);

    } else {
        console.log("No input provided.");
    }
});

function countVowels(inputString) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}
