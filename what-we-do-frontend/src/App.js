import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserNameBar from './components/usernameBar'
import GroupContainer from './containers/GroupContainer'
import ContentContainer from './containers/ContentContainer'

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
      <Router history={this.state.history}>
        {!this.state.currentUser? <Redirect to='/'/> : null}
        <Route path='/' exact render={() => <UserNameBar BackendURL={this.props.BackendURL} onLogIn={this.logIn}/>} />

        {!!this.state.currentUser? <ContentContainer /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> : <p>Who dares disturb?</p>}
        {!!this.state.currentUser? <GroupContainer /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> : <p>SUFFER FOOLS</p>}
      </Router>
    </div>
    )
  }
}

export default App;
