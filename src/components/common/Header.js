import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
    const activeStyle = {color: "red"}
    return (
        <div>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle} >About</NavLink>
        </div>
    )
}
