import React, {Component} from 'react' 
import GroupViewer from '../components/GroupViewer'
import GroupSelector from '../components/GroupSelector'



class GroupContainer extends Component{
    constructor(props){
        super(props)
        this.state = {currentGroup: null, allGroups: []}
    }

    getGroups = () => {
        console.log('backend', this.props.BackendURL)
        let url = this.props.BackendURL + "/user-groups"
        console.log('url', url)
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                userID: JSON.parse(sessionStorage.getItem('current_user')).id
            })
        })
        .then(response => response.json())
        .then(groups => this.setState({
            allGroups: groups
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
        console.log("current group", this.state.currentGroup)
    }

    render() {
        return(
            <div>
                <h1>Group Container</h1>
                <GroupViewer BackendURL={this.props.BackendURL} currentGroup={this.state.currentGroup}/>
                <GroupSelector currentGroup={this.state.currentGroup} onSelectGroup={this.setCurrentGroup} groups={this.state.allGroups}/>                              
            </div>
        )
    }

}

export default GroupContainer