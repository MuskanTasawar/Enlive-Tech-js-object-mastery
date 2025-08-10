// deepCopy.js
function deepCopy(source, visited = new WeakMap()) {
    // Handle primitives and null/undefined
    if (source === null || typeof source !== 'object') {
      return source;
    }
  
    // Handle circular references
    if (visited.has(source)) {
      return visited.get(source);
    }
  
    // Handle Date objects
    if (source instanceof Date) {
      return new Date(source.getTime());
    }
  
    // Handle RegExp objects
    if (source instanceof RegExp) {
      return new RegExp(source);
    }
  
    // Handle Arrays
    if (Array.isArray(source)) {
      const copy = [];
      visited.set(source, copy);
      for (let i = 0; i < source.length; i++) {
        copy[i] = deepCopy(source[i], visited);
      }
      return copy;
    }
  
    // Handle Objects
    if (source instanceof Object) {
      const copy = Object.create(Object.getPrototypeOf(source));
      visited.set(source, copy);
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          copy[key] = deepCopy(source[key], visited);
        }
      }
      return copy;
    }
  
    // Return other objects (e.g., functions) as-is
    return source;
  }
  
  // ===== Test Cases =====
  const original = {
    a: 1,
    b: { c: 2 },
    d: new Date(),
    e: /regex/g,
    f: [1, 2, { g: 3 }],
    h: function() { return 'hello'; }
  };
  
  // Create circular reference
  original.circularRef = original;
  
  const copied = deepCopy(original);
  
  console.log('Original:', original);
  console.log('Copied:', copied);
  console.log('Comparison:', {
    date: copied.d instanceof Date,
    regex: copied.e instanceof RegExp,
    func: typeof copied.h === 'function',
    circular: copied.circularRef === copied
  });