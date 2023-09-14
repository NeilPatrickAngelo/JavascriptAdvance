const readline = require('readline');
const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

r1.question('Please enter price for item 1: ', (item1) =>{
    r1.question('Please enter price for item 2: ', (item2) =>{
        r1.question('Please enter price for item 3: ', (item3) =>{
            item1 = parseFloat(item1);
            item2 = parseFloat(item2);
            item3 = parseFloat(item3);

            let subtotal = item1 + item2 + item3;
            let total = 0.00;
            let discount = 0.00;

            if(subtotal > 500.00){
                discount = subtotal * 0.1;
                total = subtotal - discount;
            }
            else{
                total = subtotal;
            }
            console.log('Subtotal: ' + subtotal + '\nDiscount: ' + discount + '\nTotal: ' + total);

            r1.close();

        });
    });
});