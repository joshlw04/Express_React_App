if (!process.env.DATABASE_URL) {
  require('dotenv').config();
}

const pgp = require('pg-promise')();

const connectionURL = process.env.DATABASE_URL;

const db = pgp(connectionURL);
console.log('coming from the db file');
module.exports = db;
