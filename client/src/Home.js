import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {

  state = {
    user: false
  }

  async componentDidMount(){
    const res = await axios.get('/api/current_user')
    console.log(res);
    this.setState({user: res.data});
  }
  loginUser(){
    return (
      <div>
        <p>You are login</p>
        <p>Your googleID: {this.state.user.googleId}</p>
        <a href="/auth/logout">Log out</a>
      </div>
    )
  }
  logoutUser(){
    return (
      <div>
        <p>You are not login</p>
        <a href="/auth/google">Log in</a>
      </div>
    )
  }


  render() {
    let {user} = this.state;
    console.log(user);
    return (
        <div style={{background: '#F0F2F5', padding: '20px', width: '500px', margin: '0 auto'}}>
          <h1>MERN + oAuth 2.0 Google+ Boilerplate</h1>
          {user ? this.loginUser() : this.logoutUser()}
        </div>
    );
  }
}

export default Home;
