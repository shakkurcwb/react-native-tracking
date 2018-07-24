import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from '../Home/Home.js';
import Login from '../Login/Login.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login"
        component={Login}
        title="Login"
        initial={true}
      />
      <Scene key="home"
        component={Home}
        title="Home"
      />
    </Scene>
  </Router>
);
export default Routes;