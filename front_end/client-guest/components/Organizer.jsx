import React, { Component } from 'react';
import request from 'superagent';

import firebase from '../../../firebase.config';
import ListOfGuests from './ListOfGuests.jsx';
import Login from './Login.jsx';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleLoginSubmit: React.PropTypes.func,
};

class Organizer extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  componentDidMount() {
    request.get('/api/guests')
           .then((response) => {
             this.setState({ guests: response.body });
           });
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
      this.setState({ isLoggedIn: true });
      console.log(`user ${username} logged in`);
    });
  }

  render() {
    return (
      <div id="container">
        <h1>This is the organizers view</h1>
        { !this.state.isLoggedIn ?
          <Login
            handleChangeOfInput={this.handleChangeOfInput}
            handleLoginSubmit={this.handleLoginSubmit}
          />
        : <ListOfGuests />
        }
      </div>
    );
  }
}

Organizer.propTypes = propTypes;

export default Organizer;
