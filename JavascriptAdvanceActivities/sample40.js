// Define an object with methods
const calculator = {
  value: 0,

 

  // Method to add a number to the current value
  add: function (num) {
    this.value += num;
  },

 

  // Method to subtract a number from the current value
  subtract: function (num) {
    this.value -= num;
  },

 

  // Method to reset the value to 0
  reset: function () {
    this.value = 0;
  },

 

  // Method to get the current value
  getValue: function () {
    return this.value;
  },
};

 

// Perform calculations using object methods
calculator.add(10);
console.log("After adding 10:", calculator.getValue()); // Outputs: 10

 

calculator.subtract(5);
console.log("After subtracting 5:", calculator.getValue()); // Outputs: 5

 

calculator.reset();
console.log("After resetting:", calculator.getValue()); // Outputs: 0