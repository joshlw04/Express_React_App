const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bouncerRouter = require('./routes/bouncerRouter');
const guestRouter = require('./routes/guestRouter');
const authRouter = require('./routes/authRouter');
const authentication = require('./middleware/authentication');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

app.use('/bouncer', authentication);
app.use('/guest', authentication);

app.use('/bouncer', authRouter);
app.use('/guest', userRouter);
app.use('/guest', chirpRouter);

module.exports = app;
