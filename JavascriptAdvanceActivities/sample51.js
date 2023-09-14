class MathOperations {

  // Static method for adding two numbers

  static add(x, y) {

    return x + y;

  }

 

  // Static method for subtracting two numbers

  static subtract(x, y) {

    return x - y;

  }

}

 

// Call static methods without creating an instance

const sum = MathOperations.add(5, 3);        // 5 + 3 = 8

const difference = MathOperations.subtract(8, 3); // 8 - 3 = 5

 

console.log(`Sum: ${sum}`);

console.log(`Difference: ${difference}`);