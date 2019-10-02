import React, { Component } from "react";

class GroupSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {groupName: ''}
  }

  listGroups = () => {

    return this.props.groups.map((group, index) => {
      return <li key={index}>
        <button onClick={this.handleClick} key={group.title} className="groups" value={JSON.stringify(group)}> {group.title} </button>
        </li>
    })
  }

  handleClick = (e) => {
    this.props.onSelectGroup(JSON.parse(e.target.value))
    
  }

  onAddGroup = (event) => {
    event.preventDefault()
    if (this.state.groupName === ''){
      alert("Group must have a name!")
      return
    }

    fetch(this.props.BackendURL+'/groups',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          userID: [JSON.parse(sessionStorage.getItem('current_user')).id],
        group:{
          title: this.state.groupName
        }
      })
    })
    .then( () => {this.props.onAddGroup()})
    .then( () => {this.setState({groupName: ''})})
  }

  render() {
    return (
      <div>
        <h3>GroupSelector</h3>
        {this.listGroups()}
        <form onSubmit={this.onAddGroup}>
          <label>New Group</label>
          <input type='text' onChange={(e)=>{this.setState({groupName: e.target.value})}} value={this.state.groupName}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default GroupSelector;