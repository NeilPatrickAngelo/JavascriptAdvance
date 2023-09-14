// Initialize balance

let balance = 1000;

 

// Function to update the balance display

function updateBalance() {

    document.getElementById("balanceAmount").textContent = `Php ${balance}`;

}

 

// Function to handle deposit

function deposit() {

    const amount = parseFloat(document.getElementById("amount").value);

    if (!isNaN(amount) && amount > 0) {

        balance += amount;

        updateBalance();

    } else {

        alert("Please enter a valid amount to deposit.");

    }

    // Clear input field

    document.getElementById("amount").value = "";

}

 

// Function to handle withdrawal

function withdraw() {

    const amount = parseFloat(document.getElementById("amount").value);

    if (!isNaN(amount) && amount > 0) {

        if (amount <= balance) {

            balance -= amount;

            updateBalance();

        } else {

            alert("Insufficient balance.");

        }

    } else {

        alert("Please enter a valid amount to withdraw.");

    }

    // Clear input field

    document.getElementById("amount").value = "";

}

 

// Initial balance display

updateBalance();