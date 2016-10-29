const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'dist-bouncer/js/': path.join(__dirname, 'front_end', 'client-organizer', 'index.jsx'),
    'dist-guest/js/': path.join(__dirname, 'front_end', 'client-guest', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
// const path = require('path');

// module.exports = {
//   devtool: 'source-map',
//   entry: {
//     'dist-bouncer/js/': path.join(__dirname, 'front-end', 'client-bouncer' ,'index.jsx'),
//     'dist-guest/js/' : path.join(__dirname, 'front-end', 'client-guest' ,'index.jsx'),
//   },
//   output: {
//     path: __dirname + '/dist',
//     filename: 'bundle.js'
// },
//   
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'react'],
//         },
//       },
//     ],
//   },
// };
