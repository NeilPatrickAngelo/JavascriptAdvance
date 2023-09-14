// Define some sample products and their prices
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Headphones", price: 100 },
];

 

// Initialize an empty shopping cart
const shoppingCart = [];

 

// Add some products to the shopping cart
shoppingCart.push(products[0], products[1]);

 

// Calculate the total cost of items in the cart
let totalCost = 0;
for (const item of shoppingCart) {
    totalCost += item.price;
}

 

// Display the shopping cart and total cost
console.log("Shopping Cart:");
for (const item of shoppingCart) {
    console.log(`- ${item.name} (Php ${item.price})`);
}

 

console.log(`Total Cost: Php ${totalCost}`);