// task5_variable_leak_fix.js

// ❌ Example with global variable leak
function badExample() {
    leakedVar = "I accidentally became global!";
    console.log(leakedVar);
}
badExample();
console.log("Outside function (BAD):", leakedVar); // Accessible globally (BAD practice)


// ✅ Fixed with IIFE (Immediately Invoked Function Expression)
(function () {
    let safeVar = "I am safe inside IIFE!";
    console.log(safeVar);
})();

try {
    console.log(safeVar); // Error: safeVar is not defined
} catch (err) {
    console.log("Outside function (FIXED):", err.message);
}


// ✅ Fixed with Closure
function createClosure() {
    let privateVar = "I am private inside closure!";
    return function () {
        console.log(privateVar);
    };
}
const closureFn = createClosure();
closureFn(); // Can access privateVar
try {
    console.log(privateVar); // Error: not defined
} catch (err) {
    console.log("Outside function (CLOSURE):", err.message);
}
