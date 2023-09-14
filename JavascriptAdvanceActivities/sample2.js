// Sample string
const originalString = "   Hello, World!   ";

 

// Using string methods
const stringLength = originalString.length;
const slicedString = originalString.slice(3, 8);
const substrString = originalString.substr(3, 8);
const replacedString = originalString.replace("World", "JavaScript");
const upperCaseString = originalString.toUpperCase();
const lowerCaseString = originalString.toLowerCase();
const concatenatedString = originalString.concat(" Have a nice day!");
const trimmedString = originalString.trim();
const paddedStartString = originalString.padStart(20, "*");
const paddedEndString = originalString.padEnd(20, "*");
const charAtIndex = originalString.charAt(7);
const charCodeAtIndex = originalString.charCodeAt(7);
const splitArray = originalString.split(",");

 

// Using other string methods
const indexOfSample = originalString.indexOf("sample");
const searchResult = originalString.search(/sample/i);
const includesSample = originalString.includes("sample");
const startsWithThis = originalString.startsWith("This");
const endsWithWords = originalString.endsWith("words.");

 

// Printing results
console.log("Original String:", originalString);
console.log("String Length:", stringLength);
console.log("Sliced String:", slicedString);
console.log("Substr String:", substrString);
console.log("Replaced String:", replacedString);
console.log("Upper Case String:", upperCaseString);
console.log("Lower Case String:", lowerCaseString);
console.log("Concatenated String:", concatenatedString);
console.log("Trimmed String:", trimmedString);
console.log("Padded Start String:", paddedStartString);
console.log("Padded End String:", paddedEndString);
console.log("Character at Index 7:", charAtIndex);
console.log("Character Code at Index 7:", charCodeAtIndex);
console.log("Split Array:", splitArray);

 

console.log("IndexOf 'sample':", indexOfSample);
console.log("Search 'sample':", searchResult);
console.log("Includes 'sample':", includesSample);
console.log("Starts with 'This':", startsWithThis);
console.log("Ends with 'words.':", endsWithWords);