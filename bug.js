import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, which is inefficient if it doesn't depend on any state values.
    console.log('Effect runs on every render');
  }, []); // Empty dependency array means this effect only runs once after the initial render, fixing the performance issue.  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;  