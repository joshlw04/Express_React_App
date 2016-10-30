const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist', 'js'), // where the bundle lives?
    inline: true,
    port: 8080,
  },
  entry: {
    'dist-organizer/js/': path.join(__dirname, 'front_end', 'client-organizer', 'index.jsx'),
    'dist-guest/js/': path.join(__dirname, 'front_end', 'client-guest', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/bundle.js',
  },
  // entry:
  //   // path.join(__dirname, 'front_end', 'index.jsx'),
  //   // 'dist-organizer/js/': path.join(__dirname, 'front_end', 'client-organizer', 'index.jsx'),
  //   path.join(__dirname, 'front_end', 'client-guest', 'index.jsx'), // this is correct
  // output: {
  //   path: path.join(__dirname, 'dist', 'js'),
  //   filename: 'bundle.js',
  // },
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
