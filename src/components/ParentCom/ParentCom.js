import React, { Component } from 'react'
import ChildCom from './ChildCom';

class ParentCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent"
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
    const that = this
    async function run() {
      try {
        await that.setState(prev => { return { ...prev, oneChildName: childName } })
        await console.log(that.state)
      } catch (error) {
        console.log(error);
      }
    }
    run()
  }
  render() {
    return (
      <div>
        <h1>ParentCom</h1>
        <ChildCom greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentCom