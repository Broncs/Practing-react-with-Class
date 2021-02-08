import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jhonatan',
    };
    console.log('lifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleB get derived state from props');
    return null;
  }
  componentDidMount() {
    console.log('lifeCycleB component did mount');
  }

  shouldComponentUpdate() {
    console.log('lifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('lifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate');
  }

  render() {
    console.log('LifecicleA render');
    return <div>lifecycle B</div>;
  }
}

export default LifecycleB;
