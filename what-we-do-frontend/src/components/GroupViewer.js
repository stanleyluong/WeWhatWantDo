import React, { Component } from "react";
import InviteBar from './InviteBar'
// import CheckboxToggle from './Checkbox'
import SuggestionForm from './SuggestionForm'

class GroupViewer extends Component {
  constructor(props) {
    super(props);
  }

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
    return <div>
        <h3>GroupViewer</h3>
        <h2>{this.listGroupMembers()}</h2>
        <SuggestionForm currentGroup={this.props.currentGroup}BackendURL={this.props.BackendURL}/>

        <InviteBar BackendURL={this.props.BackendURL} currentGroup={this.props.currentGroup} refreshGroups={this.props.refreshGroups}/>
        {/* <CheckboxToggle /> */}

    </div>;
  }
}

export default GroupViewer;
