import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jhonatan',
    };
    console.log('lifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA get derived state from props');
    return null;
  }
  componentDidMount() {
    console.log('lifeCycleA component did mount');
  }

  shouldComponentUpdate() {
    console.log('lifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('lifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleA componentDidUpdate');
  }
  changeState = () => {
    this.setState({
      name: 'CodeEvolution',
    });
  };

  render() {
    console.log('LifecicleA render');
    return (
      <div>
        <div>lifecycle A</div>
        <button onClick={this.changeState}>Chjange state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
