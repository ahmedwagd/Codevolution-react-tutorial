import React from 'react';

function ChildCom({ greetHandler }) {
  return (
    <div>
      <h1>ChildCom</h1>
      <button onClick={() => greetHandler("Child")}>Greet Parent</button>
    </div>
  )
}

export default ChildCom;