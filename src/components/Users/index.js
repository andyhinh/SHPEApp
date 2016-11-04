import React, { Component } from 'react';
import WorkerCard from './WorkerCard'
import { workers } from '../../mock/data';
import moment from 'moment';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: workers
    };
  }

  componentDidMount() {
    setInterval(() => {
      let { employees } = this.state;
      employees[0].value.push({
        time: moment().format("h:mm A"),
        heartRate: Math.random() * 100,
        temperature: 98,
        steps: 800
      });
    }, 10000);
  }
  render() {
    var cards = this.state.employees.map((worker) => <WorkerCard worker={worker}/>);
    return (
      <div>{cards}</div>
    );
  }
}


export default Users;
