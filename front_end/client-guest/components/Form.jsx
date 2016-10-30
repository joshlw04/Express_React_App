import React, { Component } from 'react';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleSubmitButton: React.PropTypes.func,
  getEventNames: React.PropTypes.func,
  eventNames: React.PropTypes.array,
};

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.eventNames);
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
          <select>
              {
                this.props.eventNames.map((event) => {
                  return (
                    <option>
                      {event.name}
                    </option>
                  );
                })
              }
            {/* <option>Event 2</option>
            <option>Event 3</option> */}
          </select>
          <button
            id="input-submit"
            className="submit"
            onClick={this.props.handleSubmitButton}
          >
            Submit
          </button>
          <button onClick={this.props.getEventNames}>Get Events</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = propTypes;

export default Form;
