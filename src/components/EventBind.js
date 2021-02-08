import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    // this = this.EventBind(this);

    this.state = {
      message: 'Hello',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!',
  //   });
  //   console.log(this);
  // }

  clickHandler = () => {
    this.setState({
      message: 'Goodbye!',
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
