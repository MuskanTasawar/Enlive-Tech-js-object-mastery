// objectAssignPolyfill.js
if (!Object.myAssign) {
    Object.myAssign = function(target, ...sources) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
  
      const to = Object(target);
  
      for (const source of sources) {
        if (source != null) {
          for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key];
            }
          }
        }
      }
  
      return to;
    };
  }
  
  // ===== TEST CASES =====
  const obj1 = { a: 1 };
  const obj2 = { b: 2, c: { d: 3 } };
  
  // Shallow copy demo
  const copy = Object.myAssign({}, obj1, obj2);
  console.log(copy); // { a: 1, b: 2, c: { d: 3 } }
  
  // Reference vs Value demo
  obj2.c.d = 4;
  console.log(copy.c.d); // 4 (shows reference copying)