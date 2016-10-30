class Guest {
  constructor({ id, first_name, last_name, email, event_id }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.event_id = event_id;
    console.log('coming from Guest model');
  }
}

module.exports = Guest;
