import React,{Component} from 'react'

export default class ContentViewer extends Component{

    listContents = () => {
       return this.props.content.map(con => {
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