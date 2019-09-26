import React, {Component} from 'react' 
import GroupViewer from '../components/GroupViewer'
import GroupSelector from '../components/GroupSelector'

class GroupContainer extends Component{
    

    render() {
        return(
            <div>
                <GroupViewer BackendURL={this.props.BackendURL}/>
                <GroupSelector />                              
            </div>
            
        )
    }

}

export default GroupContainer