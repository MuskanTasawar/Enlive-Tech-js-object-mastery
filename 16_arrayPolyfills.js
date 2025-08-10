// arrayPolyfills.js

// ===== 1. map() =====
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  // ===== 2. filter() =====
  Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // ===== 3. reduce() =====
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // ===== TEST CASES =====
  const nums = [1, 2, 3];
  
  console.log(nums.myMap(x => x * 2));      // [2, 4, 6]
  console.log(nums.myFilter(x => x > 1));   // [2, 3]
  console.log(nums.myReduce((sum, n) => sum + n, 0)); // 6