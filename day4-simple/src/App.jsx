import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1>Hello World</h1>
      <h3>Lorem ipsum </h3>
      <p style={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque minus assumenda deleniti beatae ex delectus dicta voluptatibus, maiores autem voluptate! Possimus natus aut beatae provident fugiat ea quibusdam dolorum.</p>
      <Card/>
    </>
  )
}
let text = {
  "color":"red",
  "font-size":"23px",
  "text-decoration":"underline",
}
export default App
