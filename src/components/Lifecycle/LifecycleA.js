import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vishwas'
    }
    console.log("LifcycleA constructor");

  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifcycleA getDerivedStateFromProps");
    return null
  }
  componentDidMount() {
    // This method  will be excuted when the component mount for the first time and only excuted once during the component lifecycle
    //  Perfect place to make a Get request
    console.log("LifcycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifcycleA shouldComponentUpdate");
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifcycleA getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate() {
    console.log("LifcycleA componentDidUpdate");

  }
  changeState = () => {
    this.setState({
      name: 'Ahmed'
    })
  }
  render() {
    console.log("LifcycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA