import { useRef } from 'react'

function InputFunc() {
  const inputRef = useRef()

  function focusInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      InputFunc
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default InputFunc