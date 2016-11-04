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
		setInterval(() => {
      let { employees } = this.state;
      employees[0].value.push({
        time: moment().format("h:mm A"),
        heartRate: (Math.random() * 110) + 70,
        temperature: (Math.random() * 5) + 95,
        steps: (Math.random() * 1500) + 500
      });
      employees[1].value.push({
        time: moment().format("h:mm A"),
        heartRate: (Math.random() * 110) + 70,
        temperature: (Math.random() * 5) + 95,
        steps: (Math.random() * 2000) + 500
      });
      employees[2].value.push({
        time: moment().format("h:mm A"),
        heartRate: (Math.random() * 110) + 70,
        temperature: (Math.random() * 5) + 95,
        steps: (Math.random() * 2000) + 500
      });
			this.setState({employees});
    }, 10000);
  }
  render() {
    let cards = this.state.employees.map((worker, key) => <WorkerCard worker={worker} key={key}/>);
		console.log([cards]);
    return (
      <div>{cards}</div>
    );
  }
}


export default Users;
