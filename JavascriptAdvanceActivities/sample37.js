const person = {
  name: {
    first: "John",
    last: "Doe",
  },
};

 

if (person.name?.first) {
  console.log("First name exists:", person.name.first);
} else {
  console.log("First name does not exist.");
}