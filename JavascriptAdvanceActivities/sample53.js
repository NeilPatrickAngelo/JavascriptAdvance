class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

 

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited Php ${amount}. New balance: Php ${this.balance}`;
    } else {
      return "Invalid deposit amount";
    }
  }

 

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn Php ${amount}. New balance: Php ${this.balance}`;
    } else if (amount <= 0) {
      return "Invalid withdrawal amount";
    } else {
      return "Insufficient funds";
    }
  }
}

 

const account = new BankAccount("12345", 1000);

 

console.log(account.deposit(500));   // Output: "Deposited Php 500. New balance: Php 1500"
console.log(account.withdraw(200));  // Output: "Withdrawn Php 200. New balance: Php 1300"
console.log(account.withdraw(2000)); // Output: "Insufficient funds"