import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleSubmitButton: React.PropTypes.func,
  getEventNames: React.PropTypes.func,
  eventNames: React.PropTypes.array,
};

class Register extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.eventNames);
    return (
      <div id="register-view">
        <h1>This is the Registration View</h1>
      </div>
    )
  }
}

Register.propTypes = propTypes;

export default Register;
