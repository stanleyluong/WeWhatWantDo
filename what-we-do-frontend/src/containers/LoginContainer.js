//sign in and sign up component
import React,{Component} from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import SignOut from '../components/SignOut'
import Title from '../components/Title'

export default class SigninSignup extends Component {
    
   userCheck = () => {
       if (this.props.currentUser === null){
            return (
                <div id="hello">
                    <SignUp login={this.props.onLogIn} BackendURL={this.props.BackendURL}/>
                    <SignIn login={this.props.onLogIn}/>
                </div>
            )
       } else {
           return <div><SignOut /></div>
       }
   }

    render(){
        return(
            <div id="topLevel">
                <Title />
                {this.userCheck()}
            </div>
        )
    }


}