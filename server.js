const path = require('path');
const app = require('./server/app');
const express = require('express');

process.env.ENV = process.env.ENV || 'dev';

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(express.static(path.join(__dirname, '/dist/guest')));
app.get('/guest', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/guest/index.html'));
});

app.use(express.static(path.join(__dirname, 'dist/organizer')));
app.get('/organizer', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/organizer/index.html'));
});

// app.get('/', (req, res) => res.send('Hello world'));

app.listen(3000, () => {
  console.log('listening on 3000');
});
