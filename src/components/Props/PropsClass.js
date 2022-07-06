import React, { Component } from 'react'

export class PropsClass extends Component {
  render() {
    const { name, heroName, children } = this.props;
    // const { state1, state2 } = this.state
    return (
      <div><h2>Hello {name} a.k.a {heroName}</h2>{children}</div>
    )
  }
}

export default PropsClass