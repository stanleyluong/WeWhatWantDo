import React, {Component} from 'react' 
import GroupViewer from '../components/GroupViewer'
import GroupSelector from '../components/GroupSelector'

class GroupContainer extends Component{
    constructor(props){
        super(props)
        this.state = {currentGroup: null}
    }

    render() {
        return(
            <div>
                <GroupViewer BackendURL={this.props.BackendURL} currentGroup={this.state.currentGroup}/>
                <GroupSelector currentGroup={this.state.currentGroup}/>                              
            </div>
            
        )
    }

}

export default GroupContainer