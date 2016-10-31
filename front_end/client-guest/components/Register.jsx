import React, { Component } from 'react';
import firebase from '../../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.registerUser = this.registerUser.bind(this);
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
  }

  handleChangeOfInput(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  registerUser() {
    console.log('registerUser running');
    const { email, password } = this.state;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(`${errorCode}: ${errorMessage}`);
            })
            .then(() => {
              console.log('user created');
            });
  }


  render() {
    return (
      <div>
        <h1>Please Register</h1>
        {/* <input type="text" name="first_name" placeholder="First Name" />
        <input type="text" name="last_name" placeholder="Last Name" /> */}
        <input type="text" name="email" placeholder="Email" onChange={this.handleChangeOfInput} />
        <input type="password" name="password" placeholder="Password" onChange={this.handleChangeOfInput} />
        <input type="submit" name="submit" onClick={this.registerUser} />
      </div>
    );
  }
}

export default Register;
