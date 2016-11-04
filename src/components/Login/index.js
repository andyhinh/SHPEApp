import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';
import { login } from '../../mock/login';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onPassChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    username === login[0].username && password === login[0].password
      ? browserHistory.push('/')
      : window.alert("Wrong Information!")
  }
  render() {
    return (
      <div className="dundundun">
      <div className="container">
        <div className="login">
          <h1>Admin Login</h1>
          <form method="post" action="">

            <TextField
              floatingLabelText="Username"
              value={this.state.username}
              onChange={this.onNameChange}
            />

            <br />
            <TextField
              type={"password"}
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.onPassChange}
            />
          <br />
          <RaisedButton label="Login" primary={true} onTouchTap={this.onSubmit} style={{width:'100%'}}/>
          </form>
        </div>
      </div>
      </div>
    );
  }
}


export default Login;
