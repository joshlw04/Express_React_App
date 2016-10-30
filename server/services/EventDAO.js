const db = require('../config/db.js');
const sql = require('../config/sqlProvider').events;
const Event = require('../models/Event');

class EventDAO {

  static all() {
    console.log('coming from EventDAO all method');
    return db.map(sql.all, [], (row) => new Event(row));
  }

  static findBy(keyValue) {
    console.log('coming from EventDAO findBy method');
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Event(row));
  }

  static create({ name, location }) {
    console.log('coming from EventDAO create method');
    return db.one(sql.create, [name, location])
             .then((row) => new Event(row));
  }

  static delete(id) {
    console.log('coming from EventDAO delete method');
    return db.none(sql.delete, [id]);
  }
}

module.exports = EventDAO;
