import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, FlatButton} from 'material-ui';
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


export default class WorkerCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Without Avatar"
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText expandable={true}>
          <LineChart width={600} height={300} data={data} margin={{top: 5, right:30, left:20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis />
            <ToolTip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="heartRate" stroke="#8884d8"/>
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d"/>
          </LineChart>
        </CardText>
      </Card>
    );
  }
}
