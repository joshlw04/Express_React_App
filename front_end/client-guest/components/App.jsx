import React, { Component } from 'react';
import request from 'superagent';
import Form from './Form.jsx';
// import Organizer from './Organizer.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
// import Guest from './Guest.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      event_id: '',
      eventNames: [],
    };

    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  componentDidMount() {
    request.get('/api/events')
           .then((response) => {
             this.setState({ eventNames: response.body });
           });
  }

  handleChangeOfInput(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmitButton(e) {
    e.preventDefault();
    request.post('/api/guests')
           .send(this.state)
           .then((response) => {
             document.querySelector('#input-name').value = '';
             document.querySelector('#input-email').value = '';
           }).catch((err) => {
             console.log(`Error: ${err}`);
           });
  }


  render() {
    return (
      <div id="container">
        <h1>Register for an event here!</h1>
        <Form
          handleChangeOfInput={this.handleChangeOfInput}
          handleSubmitButton={this.handleSubmitButton}
          getEventNames={this.getEventNames}
          eventNames={this.state.eventNames}
        />
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
