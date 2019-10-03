import React, {Component} from 'react'

export default class SignOut extends Component{
    constructor(props){
        super(props)
    }

   handleOnClick = () => {
       this.props.handleSignOut()
   }

    render(){
        return (
            <button onClick={this.handleOnClick}>Sign Out</button>
            // <div>{Date.now}</div>
        )
    }
}