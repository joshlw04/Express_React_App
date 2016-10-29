const path = require('path');
const app = require('./app/app');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist-guest')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist-guest/index.html'));
});

app.use(express.static(path.join(__dirname, 'dist-bouncer')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist-bouncer/index.html'));
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
