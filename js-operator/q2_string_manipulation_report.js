// Q2. String Manipulation Report

const productName = "  wireless headphones PRO  ";

const cleaned = productName
  .trim()                                   // remove extra spaces
  .toLowerCase()                            // "wireless headphones pro"
  .split(" ")                               // ["wireless","headphones","pro"]
  .map(w => w.charAt(0).toUpperCase() + w.slice(1)) // capitalize each word
  .join(" ")                                // "Wireless Headphones Pro"
  .replace(/pro/i, "Pro Edition");          // "Wireless Headphones Pro Edition"

console.log("Original :", `"${productName}"`);
console.log("Cleaned  :", cleaned);
console.log("Length   :", cleaned.length);
