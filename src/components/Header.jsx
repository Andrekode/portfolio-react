import React from 'react'
import Nav from './Nav'
import logo from '../assets/images/avatar.png'

function Header() {
    return (
        <header className="header">
            <img
                className="avatar"
                src={logo}
                alt="logo"
            />
            <Nav />
        </header>
    )
}

export default Header
