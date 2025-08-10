// task8_deep_compare.js

function deepEqual(val1, val2) {
    // Handle identical references or primitive equality
    if (val1 === val2) return true;

    // Handle NaN case
    if (Number.isNaN(val1) && Number.isNaN(val2)) return true;

    // If types differ, not equal
    if (typeof val1 !== typeof val2) return false;

    // If one is null and the other is not
    if (val1 === null || val2 === null) return false;

    // If not an object (i.e., primitive mismatch)
    if (typeof val1 !== "object") return false;

    // If arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
        if (val1.length !== val2.length) return false;
        return val1.every((item, i) => deepEqual(item, val2[i]));
    }

    // If one is array and other is not
    if (Array.isArray(val1) !== Array.isArray(val2)) return false;

    // For objects
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    if (keys1.length !== keys2.length) return false;

    return keys1.every(key => deepEqual(val1[key], val2[key]));
}

// Test cases
console.log(deepEqual(5, 5)); // true
console.log(deepEqual("hello", "hello")); // true
console.log(deepEqual(NaN, NaN)); // true
console.log(deepEqual([1, 2], [1, 2])); // true
console.log(deepEqual([1, 2], [2, 1])); // false
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual(null, {})); // false
