import React, { Component } from "react";

class GroupSelector extends Component {
  constructor(props) {
    super(props);
  }

  listGroups = () => {
    this.props.groups.map(group => {
      return <li>
        <button onClick={this.handleClick} className="groups" value={JSON.stringify(group)} >{group.title}</button>
        </li>
    })
  }

  handleClick = (e) => {
    this.props.onSelectGroup(e.target.value.json())
  }

  render() {
    return (
      <div>
        <ul>{this.listGroups()}</ul>
      </div>
    )
  }
}

export default GroupSelector;