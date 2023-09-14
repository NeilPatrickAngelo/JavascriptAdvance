const readline = require('readline');
const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

r1.question('Please enter Amount: ', (amount) =>{
    amount = parseFloat(amount);

    let cents25mod = Math.round((amount % .25)*100);
    let cents10mod = Math.round((amount % .10)*100);
    let cents05mod = Math.round((amount % .05)*100);

    let cents25 = amount / .25;
    let cents10 = amount / .10;
    let cents05 = amount / .05;

    let cents25final = cents25;
    let cents10final = cents10;
    let cents05final = cents05;

    if(cents25mod>=25)
    cents25final = cents25 - 1;
    if(cents10mod>=10)
    cents10final = cents10 - 1;
    if(cents05mod>=5)
    cents05final = cents05 - 1;

    console.log('Equivalent in centavos ');
    console.log('25 cents: ' + parseInt(cents25final) + ' pcs');
    console.log('10 cents: ' + parseInt(cents10final) + ' pcs');
    console.log('5 cents: '+ parseInt(cents05final) + ' pcs');

    r1.close();
});