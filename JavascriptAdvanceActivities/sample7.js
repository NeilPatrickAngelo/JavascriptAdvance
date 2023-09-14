function convertToNumbers(arr) {
    return arr.map((value) => {
        if (typeof value === "number" || value === null || value === undefined) {
            return value; // No need to convert, keep as is
        } else if (typeof value === "boolean") {
            return value ? 1 : 0; // Convert boolean to 1 or 0
        } else if (typeof value === "string" && !isNaN(value)) {
            return parseFloat(value); // Convert numeric string to number
        } else {
            return value; // Keep other values unchanged
        }
    });
}

 

const input = [42, "3.14", "hello", true, false, null, undefined];
const result = convertToNumbers(input);
console.log(result); // Outputs: [42, 3.14, "hello", 1, 0, null, undefined]