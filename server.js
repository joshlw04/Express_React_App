require('dotenv').config();

process.env.ENV = process.env.ENV || 'dev';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const app = require('./server/app');

if (process.env.ENV === 'dev') {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    stats: {
      colors: true,
      chunks: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/organizer', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/dist-organizer/index.html'));
});
app.get('/guest', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/dist-guest/index.html'));
});
// app.get('/api/weather/', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist/dist-guest/index.html'));
// });
// app.get('/guests/', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist', 'dist-guest', 'index.html'));
// });




// app.use(express.static(path.join(__dirname, '/dist/dist-guest')));
// app.get('/guest', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist/dist-guest/index.html'));
// });
//
// app.use(express.static(path.join(__dirname, 'dist/dist-organizer')));
// app.get('/organizer', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist/dist-organizer/index.html'));
// });

// app.get('/', (req, res) => res.send('Hello world'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`LISTENING on Port ${port}, webpack was here`);
});
