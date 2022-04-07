import React, { useState } from 'react';

function App() {


  return (
    <>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </>
  );
}

export default App;


// Important Notes
// 1. Only can use hooks inside function components. Cannot use in class components
// 2. When functions runs the useStates must be execute in the same order
// 