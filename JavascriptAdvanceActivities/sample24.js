const text = "start middle end";
const pattern = /^start|end$/g; // Matches "start" or "end" at the beginning or end of the string
const matches = text.match(pattern);
console.log(matches); // Output: ["start", "end"]