// Q1. Scope Conflict Resolver

// Global variable: accessible everywhere
var bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variables: exist only inside this function
  let salary = 40000;

  if (isPermanent) {
    salary += bonus; // global 'bonus' is readable inside the function
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${salary}`);
  return salary;
}

// Demonstration: changing isPermanent changes only the local result
calculateSalary(true);   // 45000
calculateSalary(false);  // 40000

// The global variable is never modified by either call
console.log("Global bonus after both calls:", bonus); // still 5000

// Local variables are NOT visible outside the function
try {
  console.log(salary);
} catch (e) {
  console.log("Outside function -> salary:", e.message);
}
try {
  console.log(isPermanent);
} catch (e) {
  console.log("Outside function -> isPermanent:", e.message);
}
