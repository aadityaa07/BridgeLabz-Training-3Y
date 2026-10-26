/* MEMORY STATE AT CREATION PHASE (before any line runs)
 *  score      (var)       -> hoisted, value = undefined
 *  announce   (function)  -> hoisted, fully usable (body stored)
 *  startGame  (function)  -> hoisted, fully usable
 *  status     (let)       -> hoisted but in the Temporal Dead Zone (TDZ);
 *                            accessing before its line => ReferenceError
 */

// FIX: declare/initialise before use, prefer let/const
const score = 50;
let status = "ready";

function announce() { console.log("Game started"); }
function startGame() { console.log(status); }

console.log(score); // 50
announce();
startGame();
