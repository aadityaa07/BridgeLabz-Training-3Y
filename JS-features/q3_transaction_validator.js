// Q3 – Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

// Custom error classes (Task 2)
class NegativeAmountError extends Error {
  constructor(id, amount) { super(`Transaction ${id}: negative amount (${amount})`); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(field, id) { super(`Transaction ${id ?? "?"}: missing ${field}`); this.name = "MissingFieldError"; }
}
class NullEntryError extends Error {
  constructor(index) { super(`Entry at index ${index} is null`); this.name = "NullEntryError"; }
}

function validate(tx, index) {
  if (tx === null || tx === undefined) throw new NullEntryError(index);
  if (tx.id === undefined) throw new MissingFieldError("id", tx.id);
  if (tx.amount === undefined) throw new MissingFieldError("amount", tx.id);
  if (tx.amount < 0) throw new NegativeAmountError(tx.id, tx.amount);
  return tx;
}

const valid = [];
const invalid = []; // { index, type, message }
const errorCategories = { NegativeAmountError: [], MissingFieldError: [], NullEntryError: [] };

for (let i = 0; i < transactions.length; i++) {          // Task 1
  const tx = transactions[i];
  debugger; // Task 5 – BREAKPOINT: watch i, tx, valid, invalid in VS Code
  try {
    valid.push(validate(tx, i));
  } catch (err) {                                        // Task 3
    invalid.push({ index: i, type: err.name, message: err.message });
    (errorCategories[err.name] ??= []).push(err.message);
  }
}

// Task 4 – report
console.log("===== TRANSACTION REPORT =====");
console.log(`Successful: ${valid.length}`);
console.log(`Failed    : ${invalid.length}`);
console.log("\nValid:", valid);
console.log("\nInvalid:");
invalid.forEach(e => console.log(`  [#${e.index}] ${e.type}: ${e.message}`));
console.log("\nBy category:");
for (const [type, msgs] of Object.entries(errorCategories)) {
  console.log(`  ${type}: ${msgs.length}`);
}
