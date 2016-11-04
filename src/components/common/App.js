import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { browserHistory } from 'react-router';
import './App.css';

const goHome = (e) => {
  e.preventDefault();
  browserHistory.push('/');
}

const goNotifications = (e) => {
  e.preventDefault();
  browserHistory.push('/notifications');
}

const goSettings = (e) => {
  e.preventDefault();
  browserHistory.push('/settings');
}

const goForecast = (e) => {
  e.preventDefault();
  browserHistory.push('/forecast');
}

const logOut = (e) => {
  e.preventDefault();
  browserHistory.push('/login');
}

const App = (props) => (
  <div>
    <AppBar
      title='SHPE App'
      iconElementRight={<FontIcon className="material-icons">power_settings_new</FontIcon>}
      iconStyleRight={{paddingTop: 10, paddingRight: 10}}
      onRightIconButtonTouchTap={logOut}
      showMenuIconButton={false}
      style={{'zIndex':'9999'}}
    />
    <div className="App">
      <Drawer open={true} zDepth={1} containerStyle={{'position': 'absolute', 'top': '64px', 'textAlign': 'left'}}>
        <MenuItem onTouchTap={goHome}>Users</MenuItem>
        <MenuItem onTouchTap={goNotifications}>Notifications</MenuItem>
        <MenuItem onTouchTap={goForecast}>Forecast</MenuItem>
        <MenuItem onTouchTap={goSettings}>Settings</MenuItem>
      </Drawer>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element
}

export default App;
