import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

import Form from './Form.jsx';

const propTypes = {
  router: React.PropTypes.object,
};

class Guest extends Component {
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
    this.handleGuestSubmitButton = this.handleGuestSubmitButton.bind(this);
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

  handleGuestSubmitButton(e) {
    e.preventDefault();
    request.post('/api/guests')
           .send(this.state)
           .then((response) => {
             console.log('user registered');
             this.props.router.push('/success');
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
          handleGuestSubmitButton={this.handleGuestSubmitButton}
          eventNames={this.state.eventNames}
        />
      </div>
    );
  }
}


Guest.propTypes = propTypes;

export default withRouter(Guest);
