// Arrow functions are expressions => NOT hoisted as callable functions.
const announce = () => console.log("Game started");
const startGame = () => console.log(status);
let status = "ready";
var score = 50;

console.log(score);
announce();
startGame();

// ---- Demonstrations of the differences (each wrapped so the file keeps running) ----
try { early1(); } catch (e) { console.log("const arrow before declaration ->", e.name + ":", e.message); } // TDZ ReferenceError
const early1 = () => {};

try { early2(); } catch (e) { console.log("var arrow before declaration   ->", e.name + ":", e.message); } // TypeError (undefined)
var early2 = () => {};

try { early3(); console.log("function declaration before declaration -> works"); } catch (e) {}
function early3() {}
