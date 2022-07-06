import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    /* 
    -First Conditional Rendering (If/Else)
    * if (this.state.isLoggedIn) {
      return (
        <h1>Wellcome vishwas</h1>
      )
    } else {
      return (
        <h1>Wellcome Guest</h1>
      )
    }
    -Second Conditional Rendering (Element Variable)
    * let message
    if (this.state.isLoggedIn) {
      message = <h1>Wellcome vishwas</h1>
    } else {
      message = <h1>Wellcome Guest</h1>
    }
    -Third Conditional Rendering (Ternary Conditional Operator)
    * {this.state.isLoggedIn ? (<h1>Wellcome vishwas</h1>) : (<h1>Wellcome Guest</h1>)}
    -Forth Conditional Rendering (Short Circuit Operator)
    * {this.state.isLoggedIn && <h1>Wellcome vishwas</h1>}
    */
    return (
      <div>
        {
          this.state.isLoggedIn && <h1>Wellcome vishwas</h1>
        }
      </div>
    )
  }
}

export default UserGreeting