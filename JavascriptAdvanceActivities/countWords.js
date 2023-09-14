const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter a string: ", (userInput) => {
    rl.close();
    if (userInput) {
        const wordCount = countWords(userInput);
        console.log(`Number of Words: ${wordCount}`);

    } else {
        console.log("No input provided.");
    }
});

function countWords(userInputs) {
    //const phrase1 = "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor    incididunt ut labore et dolore magna aliqua.";
    let wordCounts = 0;

    const splitWords = userInputs.split(' ');
    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i] !== '') {
            wordCounts++;
        }
    }
    return wordCounts;

}