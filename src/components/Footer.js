import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return (
        <div className="footer">
            <div className="soc-media">
                <FontAwesomeIcon icon={faGithub} className="fa-2x" />
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
                <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
            </div>
            <p>© COPYRIGHT 2022, SIGRÍÐUR ÖSP GREEN SIGURÐARDÓTTIR</p>
        </div>
    )
}

export default Footer
