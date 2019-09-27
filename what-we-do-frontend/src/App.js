import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import UserNameBar from './components/usernameBar'
import InviteBar from './components/InviteBar';
import GroupContainer from './containers/GroupContainer'

class App extends Component{
  constructor(){
    super()
    this.state = {currentUser: null}
  }

  logIn = userName => {
    console.log("backend url", this.props.BackendURL)
    console.log("full url", this.props.BackendURL+'/login')
    fetch(this.props.BackendURL+'/login', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        username: userName
      })
    })
    .then (response => response.json())
    .then(data => {
      sessionStorage.setItem('current_user',JSON.stringify(data));
      this.setState({currentUser: data})
      // .catch(err=>console.log(err))
    })
  }




  render() {
    return (
    <div className="App">
      {console.log(this.state)}
      <UserNameBar BackendURL={this.props.BackendURL} onLogIn={this.logIn}/>
      

      {!!this.state.currentUser? <GroupContainer /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> : <p>SUFFER FOOLS</p>}
    </div>
    )
  }
}

export default App;
