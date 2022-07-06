import React, { Component, createRef } from 'react';
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = createRef()
  }
  clickHandler = () => {
    this.componentRef.current.focusInput()
    this.componentRef.current.getValue()
  }
  render() {
    console.log(this.componentRef);
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;