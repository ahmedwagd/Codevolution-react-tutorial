import React, { Component, createRef } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef();
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  getValue() {
    console.log(this.inputRef.value);
  }
  componentDidUpdate() { }
  render() {
    console.log(this.inputRef);
    return (
      <input type="text" ref={this.inputRef} />
    );
  }
}

export default Input;