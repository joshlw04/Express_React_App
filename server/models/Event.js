class Event {
  constructor({ id, name, location }) {
    this.id = id;
    this.name = name;
    this.location = location;
    console.log('coming from Event model');
  }
}

module.exports = Event;
