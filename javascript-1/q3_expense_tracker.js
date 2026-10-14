// Q3. Monthly Expense Tracker
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];
const expenses = [4500, 2000, 12000, 3200, 1800];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
  console.log(`${categories[i].padEnd(8)}: ₹${expenses[i].toFixed(2)}`);
}

const average = total / expenses.length;

// Add 10% tax using assignment operators
let finalAmount = total;
finalAmount += total * 0.10;

console.log("-----------------------------");
console.log(`Total expenses  : ₹${total.toFixed(2)}`);
console.log(`Average expense : ₹${average.toFixed(2)}`);
console.log(`Final (10% tax) : ₹${finalAmount.toFixed(2)}`);
