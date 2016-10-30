import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleSubmitButton: React.PropTypes.func,
  getEventNames: React.PropTypes.func,
  eventNames: React.PropTypes.array,
};

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.eventNames);
    return (
      <div id="login-view">
        <h1>This is the Login View</h1>
      </div>
    )
  }
}

Login.propTypes = propTypes;

export default Login;
