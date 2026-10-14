// Q4. Academic Performance Evaluator
const marks = [78, 85, 92, 67, 88]; // 5 subjects, each out of 100
const maxPerSubject = 100;

const totalMarks = marks.reduce((sum, m) => sum + m, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * maxPerSubject)) * 100;

// Validation: any subject below 35 -> detained
const hasFailedSubject = marks.some((m) => m < 35);

let result;
if (hasFailedSubject) {
  result = "Detained (failed in at least one subject)";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Marks      : ${marks.join(", ")}`);
console.log(`Total      : ${totalMarks}`);
console.log(`Average    : ${average.toFixed(2)}`);
console.log(`Percentage : ${percentage.toFixed(2)}%`);
console.log(`Result     : ${result}`);
