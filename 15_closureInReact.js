// closureInReact.js
import React, { useState } from 'react';

function Counter() {
  // useState uses closures to remember state between renders
  const [count, setCount] = useState(0);

  // This interval setup demonstrates closures
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // 'c' is closed over here
    }, 1000);
    return () => clearInterval(id);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}