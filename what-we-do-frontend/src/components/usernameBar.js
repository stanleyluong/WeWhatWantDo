import React, {Component} from 'react'


export default class UserNameBar extends Component{
    constructor(){
        super()
        this.state = {username: ''}
    }

    render(){
        return(
            <form>
                <label>User Name</label>
                <input type='text' value={this.state.username} 
                    onChange={e=>this.setState({username: e.target.value})}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}