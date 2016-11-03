import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardHeader, CardText } from 'material-ui';
import { LineChart, XAxis, YAxis, ToolTip, CartesianGrid, Line } from 'recharts';
import './WorkerCard.css';

const WorkerCard = (props) => (
  <Card style={{marginLeft: 256 + 32, marginRight: 32, marginTop: 10}}>
    <CardHeader
      avatar={<FontIcon className="material-icons">person</FontIcon>}
      title={props.worker.name}
      actAsExpander={true}
      showExpandableButton={true}
      style={props.worker.value[props.worker.value.length-1].heartRate > 160
        ? {backgroundColor: "red"}
        : {backgroundColor: "white"}}
    />
    <CardText>
      {props.worker.value[props.worker.value.length-1].heartRate}
      <FontIcon className="material-icons">favorite</FontIcon><br />
      {props.worker.value[props.worker.value.length-1].temperature} &nbsp;
      <FontIcon className="material-icons">cloud</FontIcon>
    </CardText>
    <CardText expandable={true}>
      <LineChart width={600} height={300} data={props.worker.value} margin={{top: 5, right:30, left:20, bottom: 5}}>
        <XAxis dataKey="time"/>
        <YAxis />
        <ToolTip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="heartRate" stroke="#8884d8"/>
        <Line type="monotone" dataKey="temperature" stroke="#82ca9d"/>
      </LineChart>
      <div className="stats">
        <FontIcon className="material-icons">directions_walk</FontIcon>: {props.worker.value[props.worker.value.length-1].steps}<br />
        <FontIcon className="material-icons">whatshot</FontIcon>: {props.worker.value[props.worker.value.length-1].steps * .044}
      </div>
    </CardText>
  </Card>
)

export default WorkerCard;
