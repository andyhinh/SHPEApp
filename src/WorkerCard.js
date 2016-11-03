import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui';
import { LineChart, XAxis, YAxis, ToolTip, CartesianGrid, Line } from 'recharts';
import { workers } from './mock/data';

export default class WorkerCard extends Component {
  render() {
    var cards = workers.map(function(worker) {
      return <Card>
        <CardHeader
          title={worker.name}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <LineChart width={600} height={300} data={worker.value} margin={{top: 5, right:30, left:20, bottom: 5}}>
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
