import React, { Component } from 'react';
import request from 'superagent';
import Form from './Form.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);

    // let eventID = location.search.split('eventID=')[1];
    // console.log(eventID);
  }

  handleChangeOfInput(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmitButton(e) {
    e.preventDefault();
    const url = '/api/v1/guests';
    request.post(url)
           .send(this.state)
           .then((response) => {
             console.log(response);

      // this.setState({ name, email });
      // document.querySelector('#input-name').value = '';
      // document.querySelector('#input-email').value = '';
        }).catch((err) => {
      // console.log(`Error: ${err}`);
    });
  }

  render() {
    return (
      <div id="container">
        <h1>Register for an event here!</h1>
        <Form
          handleChangeOfInput={this.handleChangeOfInput}
          handleSubmitButton={this.handleSubmitButton}
        />
      </div>
    );
  }
}

export default App;
