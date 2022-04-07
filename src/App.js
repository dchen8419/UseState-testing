import React, { useState } from 'react';



function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')
  // Return an array of values. First value(count) will be state(current state). Second (setCount) is a function which is going to 
  // allow us to update our state. 

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('green')
    // Use a function component to update previous state. Don't use count because it's not the optimal way. 
    // Using Functions is optimal
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;


// Important Notes
// 1. Only can use hooks inside function components. Cannot use in class components
// 2. When functions runs the useStates must be execute in the same order. 
// Can't put hooks inside conditional statements, cannot put them inside loops, cannot put them in class, 
// cannot be nested in anything and needs to be at the top level of function
// 
// 