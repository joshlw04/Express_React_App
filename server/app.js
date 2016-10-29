const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const orgRouter = require('../server/routes/orgRouter');
const guestRouter = require('../server/routes/guestRouter');
const authRouter = require('../server/routes/authRouter');
const authentication = require('../server/middleware/authentication');

// const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
// }));

app.use(morgan('dev'));

app.use('/organizer', authentication);
app.use('/organizer', authRouter);

// app.use('/organizer', orgRouter);
app.use('/guest', guestRouter);

module.exports = app;
