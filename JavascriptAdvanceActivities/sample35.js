const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  console.log(person.age); 
  console.log(person);
  
  // Delete a property
  delete person.age;
  
  console.log(person.age); // Outputs: undefined
  console.log(person);