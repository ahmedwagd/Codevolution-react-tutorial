import React from 'react'

function PropsFunc({ children, name, heroName }) {

  return (
    <div><h2>Hello {name} a.k.a {heroName}</h2>{children}</div>
  )
}

export default PropsFunc