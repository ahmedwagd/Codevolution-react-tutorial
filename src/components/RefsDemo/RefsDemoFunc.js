
import { useState, useEffect } from 'react';

function RefsDemoFunc() {
  let [ref] = useState(null);
  const setCbRef = element => ref = element
  useEffect(() => {
    if (ref) {
      ref.focus()
      console.log(ref);
    }
  }, [])
  return (
    <input type="text" ref={setCbRef} />
  );
}

export default RefsDemoFunc;
