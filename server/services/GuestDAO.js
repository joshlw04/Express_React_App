const db = require('../config/db.js');
const sql = require('../config/sqlProvider').users;
const Guest = require('../models/Guest');

class GuestDAO {

  static all() {
    return db.map(sql.all, [], (row) => new Guest(row));
  }

  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Guest(row));
  }

  static create({ first_name, last_name, email }) {
    return db.one(sql.create, [first_name, last_name, email])
             .then((row) => new Guest(row));
  }

  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = GuestDAO;
