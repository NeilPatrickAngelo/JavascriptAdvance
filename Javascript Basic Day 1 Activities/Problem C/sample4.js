// Sample string
const sampleString = "   Hello, World!   ";

 

// String length
const length = sampleString.length;
console.log(`Length of the string: ${length}`);

 

// String slice()
const slicedString = sampleString.slice(3, 8);
console.log(`Slice: ${slicedString}`);

 

// String substring()
const substring = sampleString.substring(3, 8);
console.log(`Substring: ${substring}`);

 

// String substr()
const substr = sampleString.substr(3, 8);
console.log(`Substr: ${substr}`);

 

// String replace()
const replacedString = sampleString.replace("World", "JavaScript");
console.log(`Replace: ${replacedString}`);

 

// String replaceAll()
const replacedAllString = sampleString.replaceAll("o", "0");
console.log(`Replace All: ${replacedAllString}`);

 

// String toUpperCase()
const upperCaseString = sampleString.toUpperCase();
console.log(`Uppercase: ${upperCaseString}`);

 

// String toLowerCase()
const lowerCaseString = sampleString.toLowerCase();
console.log(`Lowercase: ${lowerCaseString}`);

 

// String concat()
const concatenatedString = sampleString.concat(" Have a nice day!");
console.log(`Concatenated: ${concatenatedString}`);

 

// String trim()
const trimmedString = sampleString.trim();
console.log(`Trimmed: ${trimmedString}`);

 

// String trimStart()
const trimmedStartString = sampleString.trimStart();
console.log(`Trim Start: ${trimmedStartString}`);

 

// String trimEnd()
const trimmedEndString = sampleString.trimEnd();
console.log(`Trim End: ${trimmedEndString}`);

 

// String padStart()
const paddedStartString = sampleString.padStart(20, "*");
console.log(`Pad Start: ${paddedStartString}`);

 

// String padEnd()
const paddedEndString = sampleString.padEnd(20, "*");
console.log(`Pad End: ${paddedEndString}`);

 

// String charAt()
const charAtIndex = sampleString.charAt(7);
console.log(`Character at index 7: ${charAtIndex}`);

 

// String charCodeAt()
const charCodeAtIndex = sampleString.charCodeAt(7);
console.log(`Character code at index 7: ${charCodeAtIndex}`);

 

// String split()
const splitArray = sampleString.split(",");
console.log(`Split into array: ${splitArray}`);