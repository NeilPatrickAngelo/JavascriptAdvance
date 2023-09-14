const originalObject = { name: "John", age: 30 };
const clonedObject = Object.assign({}, originalObject);

 

console.log(clonedObject); 
// Outputs: { name: "John", age: 30 }