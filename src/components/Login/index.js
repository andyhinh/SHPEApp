import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';
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
    if (username.length > 0 && password.length > 0) {
      browserHistory.push('/');
    }
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
