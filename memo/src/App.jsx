import React, { useState } from 'react'
import './App.css'
import Children from './components/Children'
const App = () => {
  const [count,setCount]=useState(0);
  console.log("Parent Component Rendered");
  return (
    <>
      <h2>Parent Compoents count: {count}</h2>
      <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
      <Children/>
    </>
  )
}

export default App
