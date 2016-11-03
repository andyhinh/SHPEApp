import React, { PropTypes } from 'react';
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

const App = (props) => (
  <div>
    <AppBar
      title='Placeholder'
      showMenuIconButton={false}
      style={{'zIndex':'9999'}}
    />
    <div className="App">
      <Drawer open={true} zDepth={1} containerStyle={{'position': 'absolute', 'top': '64px', 'textAlign': 'left'}}>
        <MenuItem onTouchTap={goHome}>Users</MenuItem>
        <MenuItem onTouchTap={goNotifications}>Notifications</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Drawer>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element
}

export default App;
