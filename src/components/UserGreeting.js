import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>welcoome biswas</div>;

    // return this.state.isLoggedIn ? (
    //   <h1>welcome Jhonatan</h1>
    // ) : (
    //   <h1>welcome Guest</h1>
    // );
    // if (this.state.isLoggedIn) {
    //   return <h1>welcome Jhonatan</h1>;
    // } else {
    //   return <h1>welcome Guest</h1>;
    // }
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>welcome Jhonatan</h1>;
    // } else {
    //   message = <h1>welcome Guest</h1>;
    // }
    // return <div>{message}</div>;
  }
}

export default UserGreeting;
