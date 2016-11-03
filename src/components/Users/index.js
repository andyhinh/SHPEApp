import React, { Component } from 'react';
import WorkerCard from './WorkerCard'
import { workers } from '../../mock/data';

class Users extends Component {
  render() {
    var cards = workers.map((worker) => <WorkerCard worker={worker}/>);
    return (
      <div>{cards}</div>
    );
  }
}


export default Users;
