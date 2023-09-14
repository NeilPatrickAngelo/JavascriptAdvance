// Sample data
const data = [
  42,
  "Hello, World!",
  true,
  { name: "John", age: 30 },
  ["apple", "banana", "cherry"],
  null,
];

 

// Loop through the data and perform type-checking
for (let item of data) {
  if (typeof item === "number") {
    console.log(`Number: ${item}`);
  } else if (typeof item === "string") {
    console.log(`String: ${item}`);
  } else if (typeof item === "boolean") {
    console.log(`Boolean: ${item}`);
  } else if (typeof item === "object") {
    if (item === null) {
      console.log(`Null: ${item}`);
    } else {
      console.log(`Object: ${JSON.stringify(item)}`);
    }
  } else if (typeof item === "undefined") {
    console.log("Undefined");
  } else {
    console.log("Unknown Type");
  }
}