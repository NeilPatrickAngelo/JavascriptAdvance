// Creating String Objects
const strObject1 = new String("Hello, World!"); // Creating a String object
const strObject2 = new String("JavaScript");    // Creating another String object

// Accessing String Properties and Methods
const length1 = strObject1.length;              // Accessing the length property
const uppercase2 = strObject2.toUpperCase();    // Calling the toUpperCase() method

console.log("String Object 1:", strObject1);
console.log("String Length 1:", length1);
console.log("String Object 2:", strObject2);
console.log("Uppercase String 2:", uppercase2);

// Comparing String Objects
const strObject3 = new String("Hello, World!"); // Another String object with the same value as strObject1

console.log("Comparing strObject1 and strObject2:", strObject1 === strObject2); // false
console.log("Comparing strObject1 and strObject3:", strObject1 === strObject3); // false
console.log("Comparing strObject1 and strObject3 using valueOf:", strObject1.valueOf() === strObject3.valueOf()); // true

// Automatic String Wrapping
const primitiveString = "JavaScript";           // Primitive string
const length3 = primitiveString.length;          // Accessing length property of a primitive string

console.log("Primitive String:", primitiveString);
console.log("Primitive String Length:", length3);