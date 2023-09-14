const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const longDate = date.toLocaleDateString(undefined, options);
console.log(longDate); // Example output: "September 11, 2023"