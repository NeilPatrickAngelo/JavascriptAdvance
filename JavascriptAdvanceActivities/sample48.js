const iterableArray = [1, 2, 3, 4, 5];
for (const item of iterableArray) {
  console.log(item);
}
const iterableString = "Hello";
for (const char of iterableString) {
  console.log(char);
}


 


const iterableArray1 = [1, 2, 3, 4, 5];

 

iterableArray1.forEach((item) => {
  console.log(item);
});

 

const iterableString2 = "Hello";

 

iterableString2.split("").forEach((char) => {
  console.log(char);
});