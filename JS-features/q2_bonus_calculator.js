"use strict"; // Task 3 – undeclared variables now throw ReferenceError

// Q2 – Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  // Uncomment to test the error handling:
  // { name: "Ravi", salary: "abc", years: "3" },
  // { name: "Neha", years: "4" },
];

function toStrictNumber(value, fieldName) {
  if (value === undefined || value === null) {
    throw new Error(`Missing property: ${fieldName}`);
  }
  const num = Number(value);
  if (value === "" || Number.isNaN(num)) {
    throw new TypeError(`Cannot convert ${fieldName}="${value}" to a number`);
  }
  return num;
}

function calculateBonus(emp) {
  const salary = toStrictNumber(emp.salary, "salary");     // Task 1
  const years = toStrictNumber(emp.years, "years");
  const rate = years > 3 ? 0.1 : 0.05;                     // Task 2
  return { salary, years, rate, bonus: salary * rate };
}

const fmt = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

for (const emp of employees) {
  try {
    const { salary, years, rate, bonus } = calculateBonus(emp);
    // Task 4 – template strings
    console.log(
`Employee : ${emp.name}
Salary   : ${fmt.format(salary)}
Years    : ${years}
Rate     : ${rate * 100}%
Bonus    : ${fmt.format(bonus)}
Total    : ${fmt.format(salary + bonus)}
-----------------------------`);
  } catch (err) {                                          // Task 5
    console.error(`Error for ${emp?.name ?? "unknown"}: ${err.name} - ${err.message}`);
  }
}
