import React, {Component} from 'react' 
import GroupViewer from '../components/GroupViewer'
import GroupSelector from '../components/GroupSelector'



class GroupContainer extends Component{
    constructor(props){
        super(props)
        this.state = {currentGroup: null}
    }

    getGroups = () => {
        let url = "http://localhost:3000/user-groups"
        fetch(url)
        .then(response => response.json())
        .then(groups => this.setState({
            allGroups: groups.map(group=>({...group, title: null}))
        }))
    }

    componentDidMount = () => {
        this.getGroups()
    }

    setCurrentGroup = (selectedGroup) => {
        this.setState({
            currentGroup: selectedGroup
        })
        console.log(selectedGroup)
    }

    render() {
        return(
            <div>
                <GroupViewer BackendURL={this.props.BackendURL} currentGroup={this.state.currentGroup}/>
                <GroupSelector currentGroup={this.state.currentGroup} onSelectGroup={this.setCurrentGroup}/>                              
            </div>
            
        )
    }

}

export default GroupContainer