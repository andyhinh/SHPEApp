import React from 'react';
import './notification.css';
import Alerts from './Alerts';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    }
  }

  addAlert = (a) => {
    a.preventDefault();
    let arrayAlert = this.state.alerts;

    arrayAlert.push({
      text: this._inputElement.value,
      key: Date.now()
    });

    this.setState({
      alerts: arrayAlert
    });

    this._inputElement.value = "";
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addAlert}>
            <input ref={(a) => this._inputElement = a}
                placeholder="Enter Alert">
            </input>
            <button type="submit">Send</button>
          </form>
        </div>
        <Alerts alerts={this.state.alerts} />
      </div>
    );
  }
}
