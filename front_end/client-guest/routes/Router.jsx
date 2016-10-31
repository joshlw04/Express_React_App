import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Welcome from '../components/Welcome.jsx';
// import Login from '../components/Login.jsx';
// import Register from '../components/Register.jsx';
import Success from '../components/Success.jsx';
import Guest from '../components/Guest.jsx';
import Organizer from '../components/Organizer.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Welcome} />
      <Route path="/guests" component={Guest} />
      <Route path="/organizers" component={Organizer} />
      <Route path="/success" component={Success} />
      {/* <Route path="register" component={Register} /> */}
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
