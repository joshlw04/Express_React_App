const db = require('../config/db.js');
const sql = require('../config/sqlProvider').guests;
const Guest = require('../models/Guest');

class GuestDAO {

  static all() {
    console.log('coming from GuestDAO all method');
    return db.map(sql.all, [], (row) => new Guest(row));
  }

  static findBy(keyValue) {
    console.log('coming from GuestDAO findBy method');
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Guest(row));
  }

  static create({ first_name, last_name, email, event_id }) {
    console.log('coming from GuestDAO create method');
    return db.one(sql.create, [first_name, last_name, email, event_id])
             .then((row) => new Guest(row));
  }

  static delete(id) {
    console.log('coming from GuestDAO delete method');
    return db.none(sql.delete, [id]);
  }
}

module.exports = GuestDAO;
