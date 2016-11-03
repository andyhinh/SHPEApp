import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <div className="dundundun">
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          <form method="post" action="">
          <p>
            <TextField
              floatingLabelText="Username"
            />
          </p>
          <p>
            <TextField
                floatingLabelText="Password"
            />
          </p>
          <RaisedButton label="Login" primary={true} style={{width:'100%'}}/>
          </form>
        </div>
      </div>
      </div>
    );
  }
}


export default Login;
