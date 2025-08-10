// task9_primitive_to_object.js

// Primitive values
let str = "Hello";
let num = 42;
let bool = true;
let sym = Symbol("id");
let bigIntVal = 123n;

// Convert primitives to objects using Object()
let strObj = Object(str);
let numObj = Object(num);
let boolObj = Object(bool);
let symObj = Object(sym);
let bigIntObj = Object(bigIntVal);

console.log(strObj instanceof String);   // true
console.log(numObj instanceof Number);   // true
console.log(boolObj instanceof Boolean); // true
console.log(typeof symObj);               // "object"
console.log(typeof bigIntObj);            // "object"

// Convert objects back to primitives using valueOf()
console.log(strObj.valueOf());    // "Hello"
console.log(numObj.valueOf());    // 42
console.log(boolObj.valueOf());   // true
console.log(symObj.valueOf());    // Symbol(id)
console.log(bigIntObj.valueOf()); // 123n

// Automatic boxing/unboxing example
console.log("Hello".toUpperCase()); // "HELLO"
// Internally:
// 1. JS wraps "Hello" into new String("Hello") object
// 2. Calls toUpperCase() on that object
// 3. Converts result back to primitive

// Note: null and undefined cannot be converted to objects directly
try {
    Object(null);
} catch (err) {
    console.log("null to object error:", err.message);
}
try {
    Object(undefined);
} catch (err) {
    console.log("undefined to object error:", err.message);
}
