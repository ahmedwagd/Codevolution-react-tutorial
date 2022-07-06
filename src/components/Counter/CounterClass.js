import React, { Component } from 'react'

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  increaseCounter() {
    this.setState((prev, props) => ({
      count: prev.count + 1 + props.value
    }))
  }
  decreaseCounter() {
    this.setState({ count: this.state.count - 1 }, () => console.log(this.state.count))
  }
  increaseCounterFive() {
    this.increaseCounter()
    this.increaseCounter()
    this.increaseCounter()
    this.increaseCounter()
    this.increaseCounter()
  }
  render() {
    return (
      <div>
        <h1>CounterClass</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.increaseCounter()}>+1</button>
        <button onClick={() => this.increaseCounterFive()}>+5</button>
        <button onClick={() => this.decreaseCounter()}>-1</button>
      </div>
    )
  }
}

export default CounterClass