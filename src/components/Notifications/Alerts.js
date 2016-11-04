import React from 'react';
import {Card, CardHeader, CardText } from 'material-ui';
import moment from 'moment';

export default class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: this.props.alerts
    };
  }

  render() {
    let entries = this.props.alerts;

    function createTask(alert) {
      return <Card style={{marginTop: 5}}>
        <CardHeader
            style={{paddingLeft: 90}}
            title={moment(alert.key).format("MMM Do h:mm")}/>
        <CardText>{alert.text}</CardText>
      </Card>
    }

    let list = entries.map(createTask);
    return (
      <div>{list}</div>
    );
  }
}
