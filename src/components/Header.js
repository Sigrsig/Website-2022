import React from 'react'
import logo from '../img/logo.png'

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Header() {

    return (
        <div className="header">
            <img src={logo} className="logo" />
            <FontAwesomeIcon icon={faEllipsisV} />
            
            
        </div>
    )
}

export default Header
