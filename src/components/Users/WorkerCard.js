import React from 'react';
import {Card, CardHeader, CardText } from 'material-ui';
import { LineChart, XAxis, YAxis, ToolTip, CartesianGrid, Line } from 'recharts';

const WorkerCard = (props) => (
  <Card style={{marginLeft: 256 + 32, marginRight: 32, marginTop: 10}}>
    <CardHeader
      title={props.worker.name}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <LineChart width={600} height={300} data={props.worker.value} margin={{top: 5, right:30, left:20, bottom: 5}}>
        <XAxis dataKey="time"/>
        <YAxis />
        <ToolTip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="heartRate" stroke="#8884d8"/>
        <Line type="monotone" dataKey="temperature" stroke="#82ca9d"/>
      </LineChart>
    </CardText>
  </Card>
)

export default WorkerCard;