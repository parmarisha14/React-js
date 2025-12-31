import React, { memo } from 'react'

const Children = () => {
    console.log("Children Component Rendered");
  return (
    <div>
      <h2>Children Components</h2>
    </div>
  )
}

export default memo(Children) 
