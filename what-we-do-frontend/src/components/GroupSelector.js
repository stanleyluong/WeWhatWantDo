import React, { Component } from "react";

class GroupSelector extends Component {
  constructor(props) {
    super(props);
  }

  listGroups = () => {
    console.log('props in GroupSelector', this.props.groups)
    return this.props.groups.map(group => {
      return <li>
        <button onClick={this.handleClick} className="groups" value={JSON.stringify(group)} >{group.title}</button>
        </li>
    })
  }

  handleClick = (e) => {
    this.props.onSelectGroup(JSON.parse(e.target.value))
    
  }

  render() {
    return (
      <div>
        <h3>GroupSelector</h3>
        {this.listGroups()}
      </div>
    )
  }
}

export default GroupSelector;