import React,{Component} from 'react'

export default class ContentViewer extends Component{

    handleRemove = (event) => {
        console.log('event target', event.target)
        fetch(this.props.BackendURL+"/remove-content",{
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
        .then(response =>{ this.props.onRemoveContent() })
    }
    
    listContents = () => {
       return this.props.content.map(con => {
            return <li>{con.title} <button id={con.id} onClick={this.handleRemove}>Remove Content</button></li>
       })
    }

    render(){
        return (
            <div>
                <h2>ContentViewer</h2>
                <div>{this.listContents()}</div>
                
            </div>
        )
    }
}