import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserNameBar from './components/usernameBar'
import InviteBar from './components/InviteBar';

class App extends Component{
  constructor(){
    super()
    this.state = {currentUser: null}
  }

  signIn = userName => {
    fetch(this.props.BackendURL+'/signin', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accpet":"application/json"
      },
      body: JSON.stringify({
        username: userName
      })
    })
  }

  render() {
    return (
    <div className="App">
      <UserNameBar BackendURL={this.props.BackendURL}/>
      <InviteBar BackendURL={this.props.BackendURL}/>
    </div>
    )
  }
}

export default App;
