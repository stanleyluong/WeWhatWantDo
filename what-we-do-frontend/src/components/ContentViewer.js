import React,{Component} from 'react'

export default class ContentViewer extends Component{

    constructor(props){
        super(props)
        this.state = { content: []}
    }

    getContents = ()  => {
        // event.preventDefault();
        // console.log(sessionStorage.getItem('current0'))
        fetch(this.props.BackendURL + "/user-content", {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                userID: JSON.parse(sessionStorage.getItem('current_user')).id
            })
        })
        .then(response => response.json())
        .then(contents => this.setState({
            content: contents
        }))
        
    }

    componentDidMount = () => {
        this.getContents()
    }

    listContents = () => {
       return this.state.content.map(con => {
            return <li>{con.title}</li>
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