// hoisting_loop_fix.js
// ===== PROBLEM: Hoisting with `var` =====
console.log("Unexpected Output (Due to Hoisting):");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Outputs 3, 3, 3 (not 0, 1, 2)
}

// ===== FIX: Use `let` (Block Scope) =====
console.log("Fixed Output (Using `let`):");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // Outputs 0, 1, 2
}