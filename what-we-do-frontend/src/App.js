import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import UserNameBar from './components/usernameBar'
import GroupContainer from './containers/GroupContainer'
import ContentContainer from './containers/ContentContainer'
import Navbar from './components/Navbar'

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
      this.setState({currentUser: data, redirect: '/user/groups'});
      
      // .catch(err=>console.log(err))
    })
  }

  handleRedirect =  () => {
    if (!this.state.currentUser && this.state.redirect === null && window.location.pathname !== '/signin'){
      this.setState({redirect:'/signin'})
    }
    if (!!this.state.redirect){
      let temp = this.state.redirect;
      this.setState({redirect: null});
      return <Redirect to={`${temp}`}/>
    }else{
      return null
    }
  }

  render() {
    
    return (
    <div className="App">
      <Router history={this.state.history}>
        {this.handleRedirect()}
        
        <Route path='/user'>
          <Navbar/>
        </Route>

        <Route path='/signin' render={() => <UserNameBar BackendURL={this.props.BackendURL} onLogIn={this.logIn}/>} />

        <Route path='/user/content'>
          {!!this.state.currentUser? <ContentContainer /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> : <Redirect to={`/signin`}/>}
        </Route>

        <Route path='/user/groups'>
          {!!this.state.currentUser? <GroupContainer /* userGroups={this.state.currentUser.groups} */ BackendURL={this.props.BackendURL}/> : <Redirect to={`/signin`}/>}
        </Route>
      </Router>
    </div>
    )
  }
}

export default App;
