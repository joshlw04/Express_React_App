import React from 'react';
import { Link } from 'react-router';
import Guest from './Guest.jsx';
import Login from './Login.jsx';


const Welcome = () => {
  return (
    <div>
      <div className="welcome_link">
        <Link to={Guest}>Guests, Register for an event here!</Link>
      </div>
      <div className="welcome_link">
        <Link to={Login}>Organizers, Log in to your event here!</Link>
      </div>
    </div>
  );
};

export default Welcome;
