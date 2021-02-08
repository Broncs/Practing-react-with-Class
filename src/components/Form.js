import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      coments: '',
      topics: 'angular',
      selectedOption: 'radio1',
    };
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleComentsChange = (e) => {
    this.setState({
      coments: e.target.value,
    });
  };
  handleTopicsChange = (e) => {
    this.setState({
      topics: e.target.value,
    });
  };

  handleRadio = (e) => {
    const { name, value } = e.target;

    this.setState({
      selectedOption: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, topics, coments, selectedOption } = this.state;
    if (username === '' || coments === '') {
      alert(`fill all fields`);
      return;
    }

    alert(
      `${this.state.username} - ${this.state.coments} - ${this.state.topics} /Selected radio ${this.state.selectedOption}`
    );
    this.setState({
      username: '',
      coments: '',
      topics: 'angular',
    });
  };

  render() {
    const { username, coments, topics } = this.state;

    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">UserName</label>
          <input type="text" value={username} onChange={this.handleChange} />
        </div>
        <div>
          <label>coments</label>
          <textarea
            value={coments}
            onChange={this.handleComentsChange}
          ></textarea>
        </div>
        <div>
          <label> topics</label>
          <select value={topics} onChange={this.handleTopicsChange}>
            <option value="react">React</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <div>
          <label>1</label>
          <input
            type="radio"
            id="1"
            value="radio1"
            checked={this.state.selectedOption === 'radio1'}
            onChange={this.handleRadio}
          />

          <label>2</label>
          <input
            type="radio"
            id="2"
            value="radio2"
            checked={this.state.selectedOption === 'radio2'}
            onChange={this.handleRadio}
          />

          <label>3</label>
          <input
            type="radio"
            id="3"
            value="radio3"
            checked={this.state.selectedOption === 'radio3'}
            onChange={this.handleRadio}
          />

          <label>4</label>
          <input
            type="radio"
            id="4"
            value="radio4"
            checked={this.state.selectedOption === 'radio4'}
            onChange={this.handleRadio}
          />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
