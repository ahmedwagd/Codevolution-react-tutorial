import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()

  }
  clickHand = () => {
    this.inputRef.current.focus()
    console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHand}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;