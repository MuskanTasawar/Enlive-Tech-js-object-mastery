// ===== TRADITIONAL SCRIPT (hoisting works) =====
// Save as script.js
console.log("Traditional Script:");
console.log(x); // undefined (var is hoisted)
var x = 10;
sayHello(); // Works (function is hoisted)
function sayHello() {
  console.log("Hello from function!");
}

// ===== ES MODULE (different behavior) =====
// Save as module.js
console.log("\nES Module:");
try {
  console.log(y); // Throws ReferenceError
} catch (e) {
  console.log("y error:", e.message); // y is not defined
}
let y = 20;
sayHi(); // Throws ReferenceError
const sayHi = () => console.log("Hi from arrow!");