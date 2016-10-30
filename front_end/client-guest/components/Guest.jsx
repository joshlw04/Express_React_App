import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleSubmitButton: React.PropTypes.func,
  getEventNames: React.PropTypes.func,
  eventNames: React.PropTypes.array,
};

class Guest extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="guest-view">
        <h1>Guests who want to register for an event will see this</h1>
      </div>
    )
  }
}

Guest.propTypes = propTypes;

export default Guest;
