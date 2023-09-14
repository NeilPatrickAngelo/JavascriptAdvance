const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log("age" in person);      // Outputs: true
console.log("email" in person);    // Outputs: false

if("age" in person){
    console.log("age prperty exist"); 
}else{
    console.log("age prperty does not exist"); 
}