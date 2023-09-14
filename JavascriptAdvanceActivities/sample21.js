const text = "abc123";
const pattern = /[^0-9]/g; // Matches digits
const matches = text.match(pattern);
console.log(matches); // Output: ["1", "2", "3"]