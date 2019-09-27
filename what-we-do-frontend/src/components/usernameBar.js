import React, {Component} from 'react'


export default class UserNameBar extends Component{
    constructor(){
        super()
        this.state = {username: ''}
    }

    handleLogIn = (e) => {
        e.preventDefault()
        this.props.onLogIn(this.state.username)
    }

    render(){
        return(
            <form onSubmit={this.handleLogIn}>
                <label>User Name</label>
                <input type='text' value={this.state.username} 
                    onChange={e=>this.setState({username: e.target.value})}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}