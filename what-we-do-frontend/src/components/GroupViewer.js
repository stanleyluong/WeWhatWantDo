import React, { Component } from "react";
import InviteBar from './InviteBar'

class GroupViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <InviteBar BackendURL={this.props.BackendURL}/>
    </div>;
  }
}

export default GroupViewer;
