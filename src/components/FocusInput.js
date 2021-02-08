import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.state = {};
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
    console.log(this.componentRef);
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    );
  }
}

export default FocusInput;
