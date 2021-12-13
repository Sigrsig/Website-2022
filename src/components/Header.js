import React, { useState } from 'react'
import logo from '../img/logo.png'

import navDots from '../img/icons8-menu-vertical-30.png'



function Header() {

    return (
        <div className="header">
            <img src={logo} className="logo" />
            <img src={navDots} className="nav-dots" />
            
            
        </div>
    )
}

export default Header
