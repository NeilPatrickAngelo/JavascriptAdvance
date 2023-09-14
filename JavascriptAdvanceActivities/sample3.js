const readline = require('readline');

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

 

// Function to reverse a string
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

 

// Function to check if a string is a palindrome
function isPalindrome(inputString) {
    const cleanedString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedString = reverseString(cleanedString);

 

    return cleanedString === reversedString;
}

 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 

// Prompt the user for input
rl.question("Enter a string: ", (userInput) => {
    rl.close();

 

    if (userInput) {
        // Perform operations on the input
        const vowelCount = countVowels(userInput);
        const reversed = reverseString(userInput);
        const palindrome = isPalindrome(userInput);

 

        // Display results
        console.log(`Input String: ${userInput}`);
        console.log(`Number of Vowels: ${vowelCount}`);
        console.log(`Reversed String: ${reversed}`);

 

        if (palindrome) {
            console.log("It's a palindrome!");
        } else {
            console.log("It's not a palindrome.");
        }
    } else {
        console.log("No input provided.");
    }
});