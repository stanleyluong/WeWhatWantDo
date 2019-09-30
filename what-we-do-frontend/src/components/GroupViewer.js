import React, { Component } from "react";
import InviteBar from './InviteBar'
import CheckboxToggle from './Checkbox'

class GroupViewer extends Component {
  constructor(props) {
    super(props);
  }

  listGroupMembers = () => {
      if (this.props.currentGroup){
    console.log('props in GroupViewer', this.props.currentGroup)
    // debugger

    return this.props.currentGroup.users.map(member => {
      return <li>
        <button onClick={this.handleClick} className="groups" value={JSON.stringify(member)} key={member.username}>{member.username}</button>
        </li>
    })
    }
    
  }

  render() {
    return <div>
        <h3>GroupViewer</h3>
        <h2>{this.listGroupMembers()}</h2>
        <InviteBar BackendURL={this.props.BackendURL}/>
        <CheckboxToggle />

    </div>;
  }
}

export default GroupViewer;
