const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Adding duplicate values won't affect the Set
console.log(mySet); // Set { 1, 2 }
mySet.delete(1); // Remove a value
console.log(mySet); // Set { 2 }
console.log(mySet.has(2)); // Check if a value exists (true)
mySet.forEach((value) => {
  console.log(value);
});