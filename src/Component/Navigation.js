import React from 'react'
import {Link} from 'react-router-dom'
import './assets/css/Navigation.css'

function Navigation(){
    return(
        <ul>
            <Link to='/'>
            <li>Facturation</li>
            </Link>
            <Link to='/Prestation'>
            <li>Prestation</li>
            </Link>
            <Link to='/Clients'>
            <li>Clients</li>
            </Link>
            <Link to='/Config'>
            <li>Config</li>
            </Link>
        </ul>
    )
}

export default Navigation