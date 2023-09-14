const date = new Date();
const customFormattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
console.log(customFormattedDate); // Example output: "11-9-2023"
const stringDate = date.toDateString();
console.log(stringDate); // Example output: "11-9-2023"
var points = new Array(3);
console.log(points);