// Create an empty object
const person = {};

 

// Adding properties to the object
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

 

console.log(person);

 

// Checking if a property exists
if ("firstName" in person) {
  console.log("firstName exists:", person.firstName);
} else {
  console.log("firstName does not exist.");
}

 

if (person.hasOwnProperty("lastName")) {
  console.log("lastName exists:", person.lastName);
} else {
  console.log("lastName does not exist.");
}

 

// Deleting properties
delete person.age;
console.log(person);

 

// Checking again after deletion
if ("age" in person) {
  console.log("age exists:", person.age);
} else {
  console.log("age does not exist.");
}

 

if (person.hasOwnProperty("age")) {
  console.log("age exists:", person.age);
} else {
  console.log("age does not exist.");
}