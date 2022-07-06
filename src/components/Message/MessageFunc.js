import React, { useEffect, useState } from 'react'

function MessageFunc() {
  const [state, setState] = useState({
    message: 'Wellcome Visitor',
    isSubscribed: false
  })
  function changeMessage() {
    setState(
      {
        message: 'Subscribed',
        isSubscribed: true
      },
      console.log(state)
    )
  }
  useEffect(() => {
    console.log(state);
  }, [state])
  return (
    <div id='funcCom'>
      <h1>{state.message}</h1>
      {state.isSubscribed ?
        (<button type="button" onClick={() => changeMessage()} disabled >Subscribed</button>) :
        (<button type="button" onClick={() => changeMessage()} >Subscribe</button>)
      }
    </div>
  )
}

export default MessageFunc