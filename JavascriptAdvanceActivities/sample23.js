const text = "aaaaabbbcccc";
const pattern = /a{3,}/g; // Matches "a" repeated at least 3 times
const matches = text.match(pattern);
console.log(matches); // Output: ["aaaaa"]