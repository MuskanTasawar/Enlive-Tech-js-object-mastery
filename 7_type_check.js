// task7_type_check.js

function getType(value) {
    if (value === null) return "null";
    if (Number.isNaN(value)) return "NaN";
    
    const type = typeof value;
    
    if (type !== "object") {
        // primitive types: string, number, boolean, undefined, symbol, bigint
        return type;
    }
    
    // For objects, arrays, dates, regex, etc.
    return Object.prototype.toString.call(value).slice(8, -1);
}

// Test cases
console.log(getType("Hello"));          // "string"
console.log(getType(42));               // "number"
console.log(getType(true));              // "boolean"
console.log(getType(undefined));         // "undefined"
console.log(getType(Symbol("id")));      // "symbol"
console.log(getType(10n));               // "bigint"

console.log(getType(null));              // "null"
console.log(getType(NaN));               // "NaN"

console.log(getType([1, 2, 3]));         // "Array"
console.log(getType({ a: 1 }));          // "Object"
console.log(getType(new Date()));        // "Date"
console.log(getType(/abc/));             // "RegExp"
console.log(getType(function () {}));    // "Function"
