import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <ul className="nav">
            <li className="nav__item">
                <NavLink to="/" className="nav__link">
                    Home
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/about" className="nav__link">
                    About
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/projects" className="nav__link">
                    Projects
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/contact" className="nav__link">
                    Contact
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav
