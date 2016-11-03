import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/common/App';
import Users from './components/Users';
import Notifications from './components/Notifications';
import Login from './components/Login';
import Settings from './components/Settings';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
      <Route path="notifications" component={Notifications} />
      <Route path="settings" component={Settings} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>
);

export default Routes;
