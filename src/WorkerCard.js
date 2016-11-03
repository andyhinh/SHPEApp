import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import { LineChart, XAxis, YAxis, ToolTip, CartesianGrid, Line } from 'recharts';

const data = [{
  name: "Jeff",
  value: [{
    time: "10:00AM",
    heartRate: 70,
    temperature: 98,
    steps: 100
  }, {
    time: "10:30AM",
    heartRate: 90,
    temperature: 98,
    steps: 500
  }, {
    time: "11:00AM",
    heartRate: 50,
    temperature: 98,
    steps: 670
  }, {
    time: "11:30AM",
    heartRate: 120,
    temperature: 98,
    steps: 800
  }]
},
{
  name: "Steve",
  value: [{
    time: "10:00AM",
    heartRate: 70,
    temperature: 98,
    steps: 100
  }, {
    time: "10:30AM",
    heartRate: 70,
    temperature: 98,
    steps: 500
  }, {
    time: "11:00AM",
    heartRate: 50,
    temperature: 98,
    steps: 670
  }, {
    time: "11:30AM",
    heartRate: 60,
    temperature: 98,
    steps: 800
  }]
}];


export default class WorkerCard extends Component {

  render() {
    var cards = data.map(function(stuff) {
      return <Card>
        <CardHeader
          title={stuff.name}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <LineChart width={600} height={300} data={stuff.value} margin={{top: 5, right:30, left:20, bottom: 5}}>
            <XAxis dataKey="time"/>
            <YAxis />
            <ToolTip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="heartRate" stroke="#8884d8"/>
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d"/>
          </LineChart>
        </CardText>
      </Card>
    });
    return (
      <div>{cards}</div>
    );
  }
}
