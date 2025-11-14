import React from 'react'

// const Display = ({count}) => {
//   return (
//     <>
//       <h2>count {count}</h2>
//     </>
//   )
// }


const Display = (props) => { 
  return (
    <>
      <h2>count {props.count}</h2>
    </>
  )
}

export default Display



