const text = "The quick brown fox jumps over the lazy dog.Fox";
const pattern = /fox/g;
const matches = text.match(pattern);
console.log(matches); // Output: ["fox"]