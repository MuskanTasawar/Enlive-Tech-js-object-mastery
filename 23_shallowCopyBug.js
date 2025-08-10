// ===== 1. Broken Example (Shallow Copy) =====
const originalUser = {
    name: "Alice",
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  
  // Shallow copy methods:
  // Method 1: Spread operator
  const shallowUser1 = { ...originalUser };
  
  // Method 2: Object.assign()
  const shallowUser2 = Object.assign({}, originalUser);
  
  // Modifying nested property
  shallowUser1.preferences.theme = "light";
  
  console.log("Original:", originalUser.preferences.theme); // "light" 😱
  console.log("Shallow Copy 1:", shallowUser1.preferences.theme); // "light"
  console.log("Shallow Copy 2:", shallowUser2.preferences.theme); // "light"
  
  // ===== 2. Deep Copy Fix =====
  function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  
  const deepUser = deepCopy(originalUser);
  deepUser.preferences.theme = "blue";
  
  console.log("\nAfter Deep Copy:");
  console.log("Original:", originalUser.preferences.theme); // "light" (unchanged)
  console.log("Deep Copy:", deepUser.preferences.theme); // "blue"