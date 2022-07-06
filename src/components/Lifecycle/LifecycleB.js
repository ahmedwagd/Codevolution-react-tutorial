import React, { Component } from 'react'
import LifecycleC from './LifecycleC';

class LifecycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vishwas'
    }
    console.log("LifcycleB constructor");

  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifcycleB getDerivedStateFromProps");
    return null
  }
  componentDidMount() {
    console.log("LifcycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifcycleB shouldComponentUpdate");
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifcycleB getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate() {
    console.log("LifcycleB componentDidUpdate");

  }
  render() {
    console.log("LifcycleB render");
    return (
      <div>
        <div>LifecycleB</div>
      </div>
    )
  }
}

export default LifecycleB