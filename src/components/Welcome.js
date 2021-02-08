import { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name, heroname } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroname}
      </h1>
    );
  }
}

export default Welcome;
