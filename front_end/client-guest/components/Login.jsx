import React, { Component } from 'react';
import firebase from '../../../firebase.config';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeOfInput(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleLoginSubmit() {
    const { username, password } = this.state;
    firebase.auth()
    .signInWithEmailAndPassword(username, password)
    .catch((err) => {
      console.log(err);
    }).then(() => {
      console.log(`user ${username} logged in`);
      console.log(`${username}`);
    });
  }

  render() {
    return (
      <div>
        <h1>Please Log In</h1>
          <input type="email" name="username" placeholder="Email" onChange={this.handleChangeOfInput} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChangeOfInput} />
          <input type="submit" name="submit" onClick={this.handleLoginSubmit} />
      </div>
    );
  }
}

export default Login;
