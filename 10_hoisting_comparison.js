// hoisting_comparison.js
// ===== TRADITIONAL FUNCTION (Hoisted) =====
console.log(traditionalFunc()); // Works due to hoisting
function traditionalFunc() {
  return "I'm hoisted!";
}

// ===== ARROW FUNCTION (Not Hoisted) =====
try {
  console.log(arrowFunc()); // Throws ReferenceError
} catch (e) {
  console.log("Arrow func error:", e.message); 
}
const arrowFunc = () => "I'm NOT hoisted";

// ===== VARIABLE HOISTING (Undefined) =====
console.log(normalVar); // undefined (hoisted but not initialized)
var normalVar = "I'm a var";