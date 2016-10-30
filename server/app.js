const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

// const orgRouter = require('./routes/orgRouter');
const guestRouter = require('./routes/guestRouter');
// const authRouter = require('./routes/authRouter');
// const authentication = require('./middleware/authentication');

const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

// app.use('/organizer', authentication);
// app.use('/organizer', authRouter);
//
// app.use('/organizer', orgRouter);
app.use('/api/guests', guestRouter);
console.log('coming from app.js page');


module.exports = app;
