import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {

  render() {
    const { count, incrementCount, name } = this.props
    return <button onClick={incrementCount}>{name} Clicked {count} times</button>
  }
}

export default UpdatedComponent(ClickCounter, 5);