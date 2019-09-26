import React, {Component} from 'react'


export default class InviteBar extends Component{
    constructor(props){
        super(props)
        this.state = {search: ''}
    }

    upDateSearch = (e) => {
        this.setState({search: e.target.value})
    }

    foundUsers = () => {
        if (this.state.search.length > 0){
            fetch(this.props.BackendURL+'/usersearch',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify({
                    search: this.state.search
                })
            })
            .then(console.log)
        }
    }

    render(){
        return(
            <form>
                <label>Search Users:</label>
                <input type='text' value={this.state.search}
                    onChange={e=>this.upDateSearch(e)}/>
                <ul>
                    {this.foundUsers()}
                </ul>
            </form>
        )
    }
}