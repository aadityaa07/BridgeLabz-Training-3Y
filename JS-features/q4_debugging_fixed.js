"use strict";

// 1. WHY IT FAILED
// In sloppy mode, `greeting = "Welcome"` silently creates a global property
// (window/globalThis.greeting). "use strict" removes that behaviour: assigning
// to an undeclared identifier throws ReferenceError.

// 2. FIX: declare the variable. `const`/`let` are block-scoped; `var` is function-scoped.
function showMessage() {
  const greeting = "Welcome"; // local to showMessage – cannot leak globally
  debugger;                   // 3. Watch `greeting`, inspect the Call Stack here
  console.log(greeting);
}

function main() { showMessage(); }
main();

// console.log(greeting); // would still throw ReferenceError – it's function-scoped now
// Call stack when paused: showMessage -> main -> (anonymous module) 
