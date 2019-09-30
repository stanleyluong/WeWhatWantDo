import React,{Component} from 'react'
import ContentViewer from '../components/ContentViewer'
import ContentAddBar from '../components/ContentAddBar'

export default class ContentContainer extends Component{

    render(){
        return(
            <div>
                <ContentAddBar/>
                <ContentViewer/>
            </div>
        )
    }
}