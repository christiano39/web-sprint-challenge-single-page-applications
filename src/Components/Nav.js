import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav>
            <NavLink exact to="/" activeClassName='active'>Home</NavLink>
            <NavLink to="/pizza" activeClassName='active'>Build your pizza</NavLink>
            <NavLink to="/order" activeClassName='active'>View your orders</NavLink>
        </nav>
    )
}