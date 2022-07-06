import React, { Component } from 'react'

class FunctionClickClass extends Component {
  clickHandelerNot() {
    console.log('Class Event Done!! Not Handeller')
  }
  render() {
    function clickHandeler() {
      console.log('Class Event Done!!')
    }
    return (
      <div>
        <h1>FunctionClickClass</h1>
        <button onClick={clickHandeler}>Click</button>
        <br />
        <br />
        <button onClick={this.clickHandelerNot}>clickHandelerNot</button>
      </div>
    )
  }
}

export default FunctionClickClass