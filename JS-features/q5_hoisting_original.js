// PREDICT FIRST, then run.
console.log(score);   // var hoisted, initialised to undefined  -> undefined
announce();           // function declaration fully hoisted     -> "Game started"
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();          // status initialised above, so it works  -> "ready"
function startGame() {
  console.log(status);
}
// Output: undefined / Game started / ready
// (No crash – but the first line prints undefined, which is the "trap".)
