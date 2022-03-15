import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="soc-media">
        <a href="https://github.com/Sigrsig">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
        <a href="https://www.linkedin.com/in/sigridur-osp-sigurdardottir/">
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
        </a>
        <a href="https://www.instagram.com/berlin_and_back_again/">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
        </a>
        <a href="https://twitter.com/SiggaGreen">
          <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
        </a>
      </div>
      <p>© COPYRIGHT 2022, SIGRÍÐUR ÖSP GREEN SIGURÐARDÓTTIR</p>
    </div>
  );
}

export default Footer;
