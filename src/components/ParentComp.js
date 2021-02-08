import React, { Component, PureComponent } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RefComp from './RefComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'jhonatan',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'jhonatan',
      });
    }, 2000);
  }

  render() {
    console.log('*******Parent COmponent render ************');
    return (
      <div>
        Parent Conponent
        <MemoComp name={this.state.name} />
        {/* <RefComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
