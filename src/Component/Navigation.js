import React from 'react'
import {NavLink} from 'react-router-dom'
import './assets/css/Navigation.css'

function Navigation(){
    return(
        <ul className="header">
            <NavLink to='/' exact activeClassName="selected" >
            <li>Facturation</li>
            </NavLink>
            <NavLink to='/Prestation' activeClassName="selected">
            <li>Prestation</li>
            </NavLink>
            <NavLink to='/Clients/personnes' activeClassName="selected">
            <li>Clients</li>
            </NavLink>
            <NavLink to='/Config' activeClassName="selected">
            <li>Réglages</li>
            </NavLink>
        </ul>
    )
}

export default Navigation