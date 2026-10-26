// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const C = { green: "\x1b[32m", red: "\x1b[31m", yellow: "\x1b[33m", reset: "\x1b[0m" };

const validNumbers = [];   // { index, raw, value }
const invalidValues = [];  // { index, raw, reason }

// Returns a reason string if the value can't be used as a number, otherwise null
function getInvalidReason(raw) {
  if (raw === null) return "null (missing value)";
  if (raw === undefined) return "undefined (missing value)";
  if (typeof raw === "string" && raw.trim() === "") return "blank string (Number(' ') would silently be 0)";
  if (Number.isNaN(Number(raw))) return "not numeric (Number() gives NaN)";
  return null;
}

// Task 1 – Number / Boolean / String forms
// Note: String(null) -> "null", String(undefined) -> "undefined" (safe, no throw)
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asNumber = Number(raw);
  const asBoolean = Boolean(raw);
  const asString = String(raw);

  // Tasks 2 & 3 – split valid / invalid
  const reason = getInvalidReason(raw);
  if (reason) {
    invalidValues.push({ index: i, raw, reason });
  } else {
    validNumbers.push({ index: i, raw, value: asNumber });
  }

  // Task 4 – conditional formatting
  const color = reason ? C.red : C.green;
  const tag = reason ? "INVALID" : "VALID  ";
  console.log(
    `${color}[${tag}]${C.reset} #${i} raw=${JSON.stringify(raw) ?? "undefined"} ` +
    `| Number=${asNumber} | Boolean=${asBoolean} | String="${asString}"`
  );
}

console.log("\n===== REPORT =====");
console.log(`Total: ${apiData.length} | Valid: ${validNumbers.length} | Invalid: ${invalidValues.length}`);

console.log(`\n${C.green}Valid numeric data:${C.reset}`);
for (const item of validNumbers) {
  console.log(`  #${item.index}: ${item.value}`);
}

console.log(`\n${C.red}Invalid (logged separately):${C.reset}`);
for (const item of invalidValues) {
  console.log(`  #${item.index}: ${JSON.stringify(item.raw) ?? "undefined"} -> ${item.reason}`);
}

const sum = validNumbers.reduce((s, x) => s + x.value, 0);
console.log(`\n${C.yellow}Sum of valid numbers: ${sum}${C.reset}`);
