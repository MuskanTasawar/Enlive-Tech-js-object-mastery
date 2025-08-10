// task6_temporal_dead_zone.js

console.log("=== Temporal Dead Zone Demo ===");

try {
    console.log(aVar); // undefined (var is hoisted with default value undefined)
} catch (err) {
    console.log("Error accessing aVar:", err.message);
}

try {
    console.log(aLet); // ReferenceError (TDZ for let)
} catch (err) {
    console.log("Error accessing aLet:", err.message);
}

try {
    console.log(aConst); // ReferenceError (TDZ for const)
} catch (err) {
    console.log("Error accessing aConst:", err.message);
}

// Declarations
var aVar = "I am var";
let aLet = "I am let";
const aConst = "I am const";

console.log("After initialization:");
console.log(aVar);   // "I am var"
console.log(aLet);   // "I am let"
console.log(aConst); // "I am const"
