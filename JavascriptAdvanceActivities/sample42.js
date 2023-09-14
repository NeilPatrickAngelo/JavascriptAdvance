const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

 

const values = Object.values(person);

 

for (const value of values) {
  console.log(value);
}