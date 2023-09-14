const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

 

// Extract and rename properties during destructuring
const { firstName: fName, lastName: lName, age: personAge } = person;

 

console.log(fName);      // Outputs: "John"
console.log(lName);      // Outputs: "Doe"
console.log(personAge);  // Outputs: 30