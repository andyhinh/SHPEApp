import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, XAxis, YAxis, ToolTip, CartesianGrid, Line } from 'recharts';

const data = [{
  name: "10:00AM",
  heartRate: 70,
  temperature: 98
}, {
  name: "10:30AM",
  heartRate: 90,
  temperature: 98
}, {
  name: "11:00AM",
  heartRate: 800,
  temperature: 98
}, {
  name: "11:30AM",
  heartRate: 120,
  temperature: 98
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LineChart width={600} height={300} data={data} margin={{top: 5, right:30, left:20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis />
          <ToolTip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="heartRate" stroke="#8884d8"/>
          <Line type="monotone" dataKey="temperature" stroke="#82ca9d"/>
        </LineChart>
      </div>
    );
  }
}

export default App;
