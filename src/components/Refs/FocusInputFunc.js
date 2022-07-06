import React, { createRef } from 'react'
import InputFunc from './InputFunc';

function FocusInputFunc() {
  const componentRef = createRef()
  const clickHandler = () => {
    componentRef.current.focusInput()
  }
  return (
    <div>
      <InputFunc ref={componentRef} />
      <button onClick={clickHandler}>Focus Input</button>
    </div>
  );
}

export default FocusInputFunc