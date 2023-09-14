const person = {
  firstName: "Neil Patrick Angeo",
  lastName: "Falceso",
  introduce: function() {
    console.log(`Hello, I'm ${this.fullName()}.`);
  },
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

person.introduce(); // Outputs: "Hello, I'm John Doe."