import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleSubmitButton: React.PropTypes.func,
  getEventNames: React.PropTypes.func,
  eventNames: React.PropTypes.array,
};

class Organizer extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.eventNames);
    return (
      <div id="organizer-view">
        <h1>This is the Organizer View</h1>
      </div>
    )
  }
}

Organizer.propTypes = propTypes;

export default Organizer;
