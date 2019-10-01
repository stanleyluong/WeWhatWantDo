import React,{Component} from 'react'

export default class ContentViewer extends Component{

    handleRemove = (event) => {
        console.log(event.target.id)
        fetch(this.props.BackendURL+"/user-content",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                userID: JSON.parse(sessionStorage.getItem('current_user')).id,
                contentID: event.target.id //event.target.getAttribute('id')
            })
        })
    }
    
    listContents = () => {
       return this.state.content.map(con => {
            return <li>{con.title} <button id={con.id} onclick={this.handleRemove(con.id)}>Remove Content</button></li>
       })
    }

    render(){
        return (
            <div>
                <h2>ContentViewer</h2>
                <ul>{this.listContents()}</ul>
                
            </div>
        )
    }
}