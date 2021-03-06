import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: 'position',
    position: 'junior',
  };

  handleUpdate = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <form action="">
        <input
          type="radio"
          name="position"
          value="junior"
          onChange={this.handleUpdate}
        />
        <input
          type="radio"
          name="position"
          value="middle"
          onChange={this.handleUpdate}
        />
        <input
          type="radio"
          name="position"
          value="senior"
          onChange={this.handleUpdate}
        />
      </form>
    );
  }
}

export default Form;
