import React, { Component } from 'react';
import ListOfGuests from './ListOfGuests.jsx'

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleLoginSubmit: React.PropTypes.func,
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  // handleChangeOfInput(e) {
  //   const stateObj = {};
  //   const stateKey = e.target.name;
  //   stateObj[stateKey] = e.target.value;
  //   this.setState(stateObj);
  // }


  render() {
    return (
      <div>
        <h1>Please Log In</h1>
        <input type="email" name="username" placeholder="Email" onChange={this.props.handleChangeOfInput} />
        <input type="password" name="password" placeholder="Password" onChange={this.props.handleChangeOfInput} />
        <input type="submit" name="submit" onClick={this.props.handleLoginSubmit} />
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default Login;
