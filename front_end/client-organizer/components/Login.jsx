import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleSubmitButton: React.PropTypes.func,
};

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div id="form-input">
        <input
          id="input-name"
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.props.handleChangeOfInput}
        />
        <input
          id="input-email"
          className="input"
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.props.handleChangeOfInput}
        />
        <button
          id="input-submit"
          className="submit"
          onClick={this.props.handleSubmitButton}>
          Submit
        </button>
      </div>
    )
  }
}

Form.propTypes = propTypes;

export default Form;
