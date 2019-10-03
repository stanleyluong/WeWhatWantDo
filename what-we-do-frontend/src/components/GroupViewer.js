import React, { Component } from "react";
import InviteBar from './InviteBar'
// import CheckboxToggle from './Checkbox'
import SuggestionForm from './SuggestionForm'

class GroupViewer extends Component {
  
  listGroupMembers = () => {
    if (this.props.currentGroup){
    // debugger

    return this.props.currentGroup.users.map(member => {
      return <li onClick={this.handleClick} className="groups" value={JSON.stringify(member)} key={member.username}>{member.username}
        </li>
    })
    }
    
  }

  render() {
    return (
    <div id='groupViewer'>
        <div id='groupMembers'>
          <h4>Users</h4>
          <p>{this.listGroupMembers()}</p>
          <InviteBar BackendURL={this.props.BackendURL} currentGroup={this.props.currentGroup} refreshGroups={this.props.refreshGroups}/>
        </div>
        <div id='groupSuggestion'>
          <h3>{this.props.currentGroup.title}</h3>
          <SuggestionForm currentGroup={this.props.currentGroup}BackendURL={this.props.BackendURL}/>
        </div>
        {/* <CheckboxToggle /> */}

    </div>)
  }
}

export default GroupViewer;
