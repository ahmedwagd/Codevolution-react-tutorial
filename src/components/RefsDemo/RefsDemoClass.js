import React, { Component } from 'react';

class RefsDemoClass extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null;
    this.setCbRef = element => this.cbRef = element
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus()
      console.log(this.cbRef);
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} type='text' />
        <input ref={this.setCbRef} type='text' />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemoClass;