import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleGuestSubmitButton: React.PropTypes.func,
  eventNames: React.PropTypes.array,
};

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="form-input">
        <form>
          <input
            id="input-name"
            className="input"
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={this.props.handleChangeOfInput}
          />
          <input
            id="input-name"
            className="input"
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={this.props.handleChangeOfInput}
          />

          <input
            id="input-email"
            className="input"
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.props.handleChangeOfInput}
          />
          <select
            id="input-event-id"
            onChange={this.props.handleChangeOfInput}
            name="event_id"
          >
            <option>Choose your event</option>
            {
                this.props.eventNames.map((event, idx) => {
                  return (
                    <option key={idx} value={event.id}>
                      {event.name}
                    </option>
                  );
                })
              }
          </select>
          <button
            id="input-submit"
            className="submit"
            onClick={this.props.handleGuestSubmitButton}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
