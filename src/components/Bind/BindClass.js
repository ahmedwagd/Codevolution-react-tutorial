import React, { Component } from 'react'

class BindClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    this.setState({
      message: 'Goodbye'
    })
    // const that = this
  }
  clickHandler2 = () => {
    this.setState({
      message: 'Goodbye cumbora'
    })
  }
  render() {
    return (
      <div>
        <h1>BindClass</h1>
        <p>{this.state.message}</p>
        <button className='bind-to-element' onClick={this.clickHandler.bind(this)}>Click bind element</button>{/* bad option*/}
        <br />
        <br />
        <button className='arrow-function-at-element' onClick={() => this.clickHandler()}>Click arrow at element</button>
        <br />
        <br />
        <button className='bind-to-constructor' onClick={this.clickHandler}>Click bind constructor</button> {/* the best option*/}
        <br />
        <br />
        <button className='arrow-function-at-class' onClick={this.clickHandler2}>Click arrow as method at class</button>{/* best option*/}
        <br />
        <br />
      </div>
    )
  }
}

export default BindClass