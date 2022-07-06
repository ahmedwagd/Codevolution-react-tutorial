import React from 'react'
import ReactDOM from 'react-dom'

function ProtalDemo() {
  return ReactDOM.createPortal(
    <h1>ProtalDemo</h1>,
    document.getElementById('portalRoot')
  )
}

export default ProtalDemo