import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Welcome from '../components/Welcome.jsx';
import Login from '../components/Login.jsx';
// import Register from '../components/Register.jsx';
// import Guest from '../components/Guest.jsx';
// import Success from '../components/Success.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Welcome} />
      <Route path="login" component={Login} />
      {/* <Route path="register" component={Register} />
      <Route path="guest" component={Guest} />
      <Route path="success" component={Success} /> */}
    </Router>
  );
};

export default Routes;


// import React from 'react';
// import { Router, Route, hashHistory } from 'react-router';
// import App from '../components/App.jsx';
// import Home from '../components/Home.jsx';
// import Login from '../components/Auth/Login.jsx';
// import Register from '../components/Auth/Register.jsx';
//
// const Routes = () => {
//   return (
//     <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <Route path="home" component={Home} />
//         <Route path="login" component={Login} />
//         <Route path="register" component={Register} />
//       </Route>
//     </Router>
//   );
// };
//
// export default Routes;
