const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

 

const entries = Object.entries(person);

 

for (const [key, value] of entries) {
  console.log(key + ": " + value);
}