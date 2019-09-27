import React, { Component } from "react";
import InviteBar from './InviteBar'
import CheckboxToggle from './Checkbox'

class GroupViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <InviteBar BackendURL={this.props.BackendURL}/>
        <CheckboxToggle />

    </div>;
  }
}

export default GroupViewer;
