const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyCKp-xt5pvwsgaVQ67j2agmWuV_jZQpA4g',
  authDomain: 'reactexpresswdifinal.firebaseapp.com',
  databaseURL: 'https://reactexpresswdifinal.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '773010467413',
};

firebase.initializeApp(config);

module.exports = firebase;
