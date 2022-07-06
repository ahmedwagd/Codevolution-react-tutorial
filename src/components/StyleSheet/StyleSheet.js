import React from 'react';
import './myStyles.css'

const heading = {
  fontSize: '72px',
  color: 'blue'
}

function StyleSheet({ primary }) {
  let className = primary ? 'primary' : ' '
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheet</h1>
      <h1 style={heading}>Inline</h1>
    </div >
  )
}

export default StyleSheet