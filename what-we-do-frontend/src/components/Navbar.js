import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component{
    render(){
        return (
        <div className='navBar'>
            <p><Link to='/user/groups'>Groups </Link>
              |
            <Link to='/user/content'> My Content</Link></p>
        </div>
        )
    }
}