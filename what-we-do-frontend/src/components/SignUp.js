import React,{Component} from 'react'

export default class SignUp extends Component{

    constructor(props){
        super(props)
        this.state = {input: ""}
    }

    handleSignUp = () => {
        let username = this.state.input
        this.props.login(username)
        fetch(this.props.BackendURL+'/users',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                username: username
            })
        })
        .then(() => { this.props.login(username) })
    }
          
    handleOnChange = (e) => {
        this.setState({
            input: e.target.value
        })
    } 

    render(){
        return (
            <div id="signUp">
                <input type="text" value={this.state.input} onChange={this.handleOnChange}/>
                <button onClick={this.handleSignUp}>Sign Up</button>
            </div>
        )}

}