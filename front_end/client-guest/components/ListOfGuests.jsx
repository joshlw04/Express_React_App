import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  guests: React.PropTypes.array,
};

class ListOfGuests extends Component {
  constructor() {
    super();
    this.state = {
      guests: [],
    };
  }

  componentDidMount() {
    request.get('/api/guests')
           .then((response) => {
             console.log(response.body);
             this.setState({ guests: response.body });
           });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.guests.map((guest, idx) => {
              return (
                <li key={idx} value={guest.id}>
                  {guest.first_name}
                  {guest.last_name}
                  {guest.email}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

ListOfGuests.propTypes = propTypes;

export default ListOfGuests;
