import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
      username: '',
      password : '',
      screen: 'auth',
      error: '',
      arr: []
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

    logout = () => {
      axios.get('/users/logout')
      .then(res => this.setState({screen: 'auth'}))
      .catch(error => console.log(error))
    }  
  
    onSubmit = (e) => {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        password: this.state.password
      }

      //if post
      axios.post('/users/login', user)
      .then(response => {
        if(response.status !== 200){
         throw new Error(response.status)
        } else {
            this.setState({
              username: '',
                password: '',
                screen: ''
            })
            return response.json()
        }
      })
      .catch(error => {
        if(error.response !== 200) {
          this.setState({error: 'not found'})
        }
      })

      
    }
  
    render(){
      const {username, password, screen, error} = this.state;
      return (
        <div>
          {screen === 'auth'?
          <div>
            <h3>Login</h3>
            {error}
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
          </div>:
          <>
          <h2>Signed in!</h2>
          <button onClick={this.logout}>Log out</button>
          </>
        }
          
        </div>
      );
    }
  }

export default Login;