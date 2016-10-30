import React, { Component } from 'react';
import request from 'superagent';
import Form from './Form.jsx';

class Organizer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };


  }

  render() {
    return (
      <div id="container">
        <h1>This is the organizers view</h1>
      </div>
    );
  }
}

export default Organizer;
