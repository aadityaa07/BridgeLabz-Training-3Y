"use strict";
function showMessage() {
  greeting = "Welcome"; // undeclared
  console.log(greeting);
}
showMessage();
// Run: node q4_debugging_broken.js
// -> ReferenceError: greeting is not defined
