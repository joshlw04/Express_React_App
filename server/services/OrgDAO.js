const db = require('../config/db.js');
const sql = require('../config/sqlProvider').organizers;
const Organizer = require('../models/Organizer');

class OrganizerDAO {

  static all() {
    return db.map(sql.all, [], (row) => new Organizer(row));
  }

  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Organizer(row));
  }

  static create({ first_name, last_name, email }) {
    return db.one(sql.create, [first_name, last_name, email])
             .then((row) => new Organizer(row));
  }

  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = OrganizerDAO;
