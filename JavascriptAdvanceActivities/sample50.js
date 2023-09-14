const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
console.log(myMap.get("name")); // "John"
myMap.delete("age");
console.log(myMap.has("age")); // false
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});