import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
    state = {
      username: '',
      password : ''
    }
  
    handleUsername = (e) => {
      this.setState({
        username: e.target.value
      })
    }
  
    handlePassword = (e) => {
      this.setState({
        password: e.target.value
      })
    }
  
    onSubmit = (e) => {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        password: this.state.password
      }
  
      axios.post('/users/sign-up', user)
        .then(res => console.log(res.data))
  
        this.setState({
          username: '',
            password: ''
        })
    }
  
    render(){
      const {username, password} = this.state;
      return (
        <div>
          <h3>Sign Up</h3>
          <form onSubmit={this.onSubmit}>
            <label>Username</label>
            <input 
            type="text"
            value={username}
            onChange={this.handleUsername}/>
            <label>Password</label>
            <input 
            type="password"
            value={password}
            onChange={this.handlePassword}/>
            <div className="form-group form-btn">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>
      );
    }
  }

export default SignUp;