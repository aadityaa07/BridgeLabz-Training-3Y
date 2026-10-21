// Q5. Boolean Logic Access System

function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Door must be closed/secured, window closed, alarm on, owner inside
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  return isSecure ? "Secure" : "Unsafe";
}

// Test cases: [isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside]
const tests = [
  [true,  true,  true,  true],   // Secure
  [false, true,  true,  true],   // Unsafe: door not locked
  [true,  false, true,  true],   // Unsafe: window open
  [true,  true,  false, true],   // Unsafe: alarm off
  [true,  true,  true,  false],  // Unsafe: owner not inside
  [false, false, false, false],  // Unsafe: everything off
];

tests.forEach((t, i) => {
  const [door, win, alarm, owner] = t;
  console.log(
    `Test ${i + 1}: door=${door}, window=${win}, alarm=${alarm}, owner=${owner} -> ${checkAccess(...t)}`
  );
});

// Using ! and || as well: unsafe if any condition fails
const [d, w, a, o] = [true, true, true, true];
const unsafe = !a || !d || !w || !o;
console.log("Using NOT/OR check ->", unsafe ? "Unsafe" : "Secure");
