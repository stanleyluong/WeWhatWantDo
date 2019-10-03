import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserNameBar from './components/usernameBar'
import GroupContainer from './containers/GroupContainer'
import ContentContainer from './containers/ContentContainer'
import LoginContainer from './containers/LoginContainer'

class App extends Component{
  constructor(){
    super()
    this.state = {currentUser: null, redirect: null}
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
      this.setState({currentUser: data, redirect: '/user'});
      
      // .catch(err=>console.log(err))
    })
  }

  handleRedirect =  () => {
    if (!this.state.currentUser && this.state.redirect === null && window.location.pathname !== '/'){
      this.setState({redirect:'/'})
    }
    if (!!this.state.redirect){
      let temp = this.state.redirect;
      this.setState({redirect: null});
      return <Redirect to={`${temp}`}/>
    }else{
      return null
    }
  }

  handleSignOut = () => {
    this.setState({
        currentUser: null
    })
  }

  render() {
    console.log('current user', this.state.currentUser)
    
    return (
    <div className="App">
      <Router history={this.state.history}>
        {this.handleRedirect()}
        <Route path='/'  render={() => 
          <LoginContainer 
            BackendURL={this.props.BackendURL} 
            onLogIn={this.logIn} 
            currentUser={this.state.currentUser} 
            handleSignOut={this.handleSignOut}/>} />

        <Route path='/user'>
          {!!this.state.currentUser? 
            <ContentContainer 
            /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> 
            : 
            <p>Who dares disturb?</p>}
        </Route>

        <Route path='/user'>
          {!!this.state.currentUser? 
          <GroupContainer 
          /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> 
          : 
          <p>SUFFER FOOLS</p>}
        </Route>
      </Router>
    </div>
    )
  }
}

export default App;
