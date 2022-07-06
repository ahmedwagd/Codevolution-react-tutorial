import React, { Component } from 'react'

class MessageClass extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Wellcome Visitor',
      isSubscribed: false
    }
  }
  changeMessage() {
    this.setState(
      {
        message: 'Subscribed',
        isSubscribed: true
      }
    )
  }
  render() {
    return (
      <div id='classCom'>
        <h1>{this.state.message}</h1>
        {this.state.isSubscribed ? (<button onClick={() => this.changeMessage()} disabled >Subscribed</button>) : (<button onClick={() => this.changeMessage()} >Subscribe</button>)}
      </div>
    )
  }
}

export default MessageClass