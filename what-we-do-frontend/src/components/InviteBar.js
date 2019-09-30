import React, {Component} from 'react'


export default class InviteBar extends Component{
    constructor(props){
        super(props)
        this.state = {search: '', foundUsers: []}
    }

    upDateSearch = (e) => { 
        this.setState({search: e.target.value})

        if (e.target.value.length > 0){
            fetch(this.props.BackendURL+'/usersearch',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify({
                    search: e.target.value
                })
            })
            .then(response => response.json())
            .then(json => {
                this.setState({foundUsers: json})
            })
        }
    }

    makeUserList = (json) => {
        if (json.length > 0 && this.state.search.length > 0){
            let list = json.map(element => {
                return <li><button value={JSON.stringify(element)} onClick={this.handleButton}>{element.username}</button></li>
            });
            let renderList = (
            <ul>
                <li>A list</li>
                {list}
            </ul>
            )
            return renderList
        }
    }

    handleButton = (e) => {
        e.preventDefault()
        console.log('e.target.value', e.target.value)// this.props.returnUser(e.target.value)
    }

    render(){
        return(
            <form>
                <h2>Invite Bar</h2>
                <label>Search Users:</label>
                <input type='text' value={this.state.search}
                    onChange={e=>this.upDateSearch(e)}/>

                    {this.makeUserList(this.state.foundUsers)}

            </form>
        )
    }
}