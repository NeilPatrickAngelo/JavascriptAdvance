const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

 

const keys = Object.keys(person);

 

for (const key of keys) {
  console.log(key + ": " + person[key]);
}