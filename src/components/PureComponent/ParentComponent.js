import React, { Component } from 'react';
import MemoComp from './MemoComponent';
import PureComp from './PureComponent';
import RegularComp from './RegularComponent';

class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Ahmed'
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Ahmed'
      })
    }, 2000)
  }
  render() {
    console.log('****************** Parent Component Render ******************');
    return (
      <div>
        <h1>ParentComp</h1>
        {/* <RegularComp name={this.state.name} /> */}
        {/*  <PureComp name={this.state.name} />*/}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;