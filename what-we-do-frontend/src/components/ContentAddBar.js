import React,{Component} from 'react'

export default class ContentAddBar extends Component{
    
    constructor(props) {
        super(props);
        this.state = {content: ''};
    }
    
    handleChange = (event) => {
        this.setState({content: event.target.value});
    }

    handleAddContent = async (event) => {
        console.log('handle Add content')
        event.preventDefault();
        
        fetch(this.props.BackendURL+'/add-content', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                userID: JSON.parse(sessionStorage.getItem('current_user')).id,
                title: this.state.content
            })
        })
        .then(response => {this.props.onAddContent()})
    }

    render(){
        return ( 
        <div>
            <h2>ContentAddBar</h2>
            <form onSubmit={this.handleAddContent}>
            <label>
              Add Content:
              <input type="text" value={this.state.content} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}