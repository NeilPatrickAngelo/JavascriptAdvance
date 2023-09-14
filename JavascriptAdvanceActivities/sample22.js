const text = "abc123DeFGHijKlkjjkj";
const pattern = /[a-z]/gi; // Matches digits
const matches = text.match(pattern);
console.log(matches); // Output: ["1", "2", "3"]