import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import logo from './logo.svg';
import './App.css';
import WorkerCard from './WorkerCard';

// const drawerStyles = {
//   height: calc(100% - <AppBar.height>),
//   bottom: 0
// };

class App extends Component {
  render() {
    return (
    <div>
      <AppBar
        title='Placeholder'
    showMenuIconButton={false}
      />
      <div className="App">
        <Drawer open={true} zDepth={1} containerStyle={{'position': 'absolute', 'top': '64px', 'textAlign': 'left'}}>
          <MenuItem>Users</MenuItem>
          <MenuItem>Notifications</MenuItem>
          <MenuItem>Log Out</MenuItem>
        </Drawer>
        <WorkerCard/>

      </div>
    </div>
    );
  }
}

export default App;
