// flattenArray.js
function flattenDeep(arr) {
    return arr.reduce((flat, item) => {
      return flat.concat(
        Array.isArray(item) 
          ? flattenDeep(item)  // Recursively flatten nested arrays
          : item
      );
    }, []);
  }
  
  // Test Case
  const nestedArray = [1, [2, [3, [4]], 5]];
  console.log(flattenDeep(nestedArray)); // [1, 2, 3, 4, 5]