import React from 'react'

import github from '../img/socialMedia/github.png'
import linkedin from '../img/socialMedia/linkedin.png'
import instagram from '../img/socialMedia/instagram.png'
import twitter from '../img/socialMedia/twitter.png'


function Footer() {
    return (
        <div className="footer">
            <div className="soc-media">
                <img src={github} />
                <img src={linkedin} />
                <img src={instagram} />
                <img src={twitter} />
            </div>
            <p>© COPYRIGHT 2022, SIGRÍÐUR ÖSP GREEN SIGURÐARDÓTTIR</p>
        </div>
    )
}

export default Footer
