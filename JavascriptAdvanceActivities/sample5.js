function formatNumber(num, format) {
    let formattedNumber = format;

 

    // Replace 's' with toString()
    formattedNumber = formattedNumber.replace(/s/g, num.toString());

 

    // Replace 'e' with toExponential()
    formattedNumber = formattedNumber.replace(/e/g, num.toExponential());

 

    // Replace 'fX' with toFixed(X)
    formattedNumber = formattedNumber.replace(/f(\d+)/g, (match, precision) => {
        return num.toFixed(parseInt(precision, 10));
    });

 

    // Replace 'pX' with toPrecision(X)
    formattedNumber = formattedNumber.replace(/p(\d+)/g, (match, precision) => {
        return num.toPrecision(parseInt(precision, 10));
    });

 

    // Replace 'v' with valueOf()
    formattedNumber = formattedNumber.replace(/v/g, num.valueOf());

 

    return formattedNumber;
}

 

console.log(formatNumber(12345.6789, 's'));
console.log(formatNumber(12345.6789, 'e'));
console.log(formatNumber(12345.6789, 'f2'));
console.log(formatNumber(12345.6789, 'p3'));
console.log(formatNumber(12345.6789, 'v'));
console.log(formatNumber(12345.6789, 'sfv'));