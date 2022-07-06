import React, { Component } from 'react'

class LifecycleC extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vishwas'
    }
    console.log("LifecycleC constructor");

  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null
  }
  componentDidMount() {
    console.log("LifecycleC componentDidMount");
  }
  render() {
    console.log("LifecycleC render");
    return (
      <div>LifecycleC</div>
    )
  }
}

export default LifecycleC