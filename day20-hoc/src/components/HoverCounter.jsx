import React from 'react'
import CounterWrapper from '../hoc/counterWrapper'

const HoverCounter = ({count,incrementCount}) => {
    
  return (
    <div>
      <h2>Hover Count: {count}</h2>
      <button type="button" onMouseOver={incrementCount}>Hover</button>
    </div>
  )
}

export default CounterWrapper(HoverCounter)
