import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUserName: '',
      txtPassWord: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    var {txtPassWord, txtUserName} = this.state;
    if(txtPassWord === 'admin' && txtUserName === 'admin'){
      localStorage.setItem('user', JSON.stringify({
        username: txtUserName,
        password: txtPassWord
      }))
    }
  }

  render() {
    var {txtPassWord, txtUserName} = this.state;
    var loggedInUser = localStorage.getItem('user');
    var {location} = this.props;
    console.log(location)
    if(loggedInUser !== null){
      return <Redirect to={{
        pathname: '/products',
        state:{
          from: location
        }
      }} />
    }
    return (
      <div>
        <h1>This is Login Page</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={this.onLogin}>
              <legend>Login</legend>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" id="userName" placeholder="User Name" name="txtUserName" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label>PassWord</label>
                <input type="password" className="form-control" id="passWord" placeholder="Input field" name="txtPassWord" onChange={this.onChange} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
