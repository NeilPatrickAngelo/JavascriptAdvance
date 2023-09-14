// Implicit Type Conversion (Type Coercion)
const num1 = 5;
const str1 = "10";
const result1 = num1 + str1; // JavaScript converts num1 to a string and performs string concatenation
console.log(result1); // Output: "510"
// Explicit Type Conversion (Type Casting)
const str2 = "123";
const num2 = parseInt(str2); // Converts the string to an integer
console.log(num2); // Output: 123
const num3 = 456;
const str3 = String(num3); // Converts the number to a string
console.log(str3); // Output: "456"
// Using Number(), String(), and Boolean()
const numStr = "42";
const num4 = Number(numStr); // Converts the string to a number
console.log(num4); // Output: 42
const boolStr = "true";
const bool = Boolean(boolStr); // Converts the string to a boolean
console.log(bool); // Output: true
// Using parseInt() and parseFloat()
const floatStr = "3.14";
const floatNum = parseFloat(floatStr); // Converts the string to a float
console.log(floatNum); // Output: 3.14
// Using the + Operator for Numeric Conversion
const str5 = "99";
const num5 = +str5; // Converts the string to a number
console.log(num5); // Output: 99
// Falsy and Truthy Values
const value1 = "Hello";
if (value1) {
    console.log("Truthy value1"); // Output: "Truthy value1"
}
const value2 = 0;
if (!value2) {
    console.log("Falsy value2"); // Output: "Falsy value2"
}