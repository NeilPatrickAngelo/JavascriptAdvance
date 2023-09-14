const readline = require('readline');
const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

r1.question('Enter first number: ', (number1) =>{
    r1.question('Enter second number: ', (number2) =>{
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);

        let add = number1 + number2;
        let sub = number1 - number2;
        let mul = number1 * number2;
        let div = number1 / number2;
        let mod = number1 % number2;
        let exp = number1 ** number2;

        console.log('Add: ' + number1 +' + ' + number2 + ' = '+ add);
        console.log('Subtract: ' + number1 +' - ' + number2 + ' = '+ sub);
        console.log('Multiply: ' + number1 +' * ' + number2 + ' = '+ mul);
        console.log('Divide: ' + number1 +' / ' + number2 + ' = '+ div);
        console.log('Modulus: ' + number1 +' % ' + number2 + ' = '+ mod);
        console.log('Exponent: ' + number1 +' ** ' + number2 + ' = '+ exp);

        r1.close();
    });
});