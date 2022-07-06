import React from 'react'

function FunctionClickFunc() {
  function clickHandeler() {
    console.log('Function Event Done!!')
  }
  return (
    <div>
      <h1>FunctionClickFunc</h1>
      <button onClick={clickHandeler}>Click</button>
    </div>
  )
}

export default FunctionClickFunc