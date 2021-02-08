import React, { Component } from 'react';

export class ClassClick extends Component {
  clickHandler() {
    console.log('class button clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}

export default ClassClick;
