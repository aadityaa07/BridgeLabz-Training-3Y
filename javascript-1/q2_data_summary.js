// Q2. Multi-Type Data Summary
const userName = "Riya Sharma";
const age = 25;
const isActive = true;
const hobbies = ["reading", "coding", "cycling"];
const address = { city: "Kosi", state: "Uttar Pradesh" };
const middleName = null;
let phoneNumber; // undefined

// Helper: typeof alone can't distinguish array/null, so handle them explicitly
const getType = (value) => {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
};

const entries = [
  ["userName", userName],
  ["age", age],
  ["isActive", isActive],
  ["hobbies", hobbies],
  ["address", address],
  ["middleName", middleName],
  ["phoneNumber", phoneNumber],
];

const report = entries.map(([label, value]) => ({
  Label: label,
  Value: typeof value === "object" && value !== null ? JSON.stringify(value) : String(value),
  Type: getType(value),
  "typeof result": typeof value,
}));

console.table(report);
