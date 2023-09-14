const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your first name: ", (firstName) => {
    rl.question("Enter your last name: ", (lastName) => {
        rl.question("Enter your email domain: ", (emailDom) => {
            rl.close();
            if(firstName!='' && lastName!='' && emailDom!=''){
                const emailAdd = generateEmail(firstName, lastName, emailDom);
                console.log(`Your email address is ${emailAdd }`)
            }
            else{
                console.log("Invalid Input.");
            }
        });
    });
});

function generateEmail(firstName, lastName, emailDom) {
    return firstName.concat(".",lastName.concat("@",emailDom,".com"));
}
