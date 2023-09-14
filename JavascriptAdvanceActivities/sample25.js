const text = "aabbcc";
const pattern = /a.b+/g; 
// Matches "aab" and "abbcc" (any character between "a" and "b" with one or more "b" characters)
const matches = text.match(pattern);
console.log(matches); // Output: ["aab", "abb"]