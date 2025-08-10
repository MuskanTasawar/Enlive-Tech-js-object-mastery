// counterModule.js
function createCounter(name) {
    let count = 0;  // Private variable
    
    return {
      increment: () => ++count,
      decrement: () => --count,
      reset: () => (count = 0),
      getCount: () => `${name}'s count: ${count}`
    };
  }
  
  // Usage Example:
  const counter1 = createCounter("Cart");
  const counter2 = createCounter("Wishlist");
  
  counter1.increment(); // 1
  counter1.increment(); // 2
  counter2.increment(); // 1 (independent)
  
  console.log(counter1.getCount()); // "Cart's count: 2"
  console.log(counter2.getCount()); // "Wishlist's count: 1"