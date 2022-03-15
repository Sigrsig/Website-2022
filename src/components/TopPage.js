import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
// import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function TopPage() {



    
    return (
        <div className="top-page">
                <h1 className="title">Hi! I'm Sigga</h1>
                <h1 className="title">An Icelandic front-end engineer based in Berlin</h1>
                <FontAwesomeIcon icon={faChevronDown} className="fa-2x" /> 
                
        </div>
    ) 
}

export default TopPage
