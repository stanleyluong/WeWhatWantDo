//sign in and sign up component
import React,{Component} from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import SignOut from '../components/SignOut'

export default class SigninSignup extends Component {
    
   userCheck = () => {
       if (this.props.currentUser === null){
            return (
                <div>
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
            <div>
                {this.userCheck()}
            </div>
        )
    }


}