import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCss3,
  faHtml5,
  faReact,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

/**
 * How about a:
 * "Things I know" and a "things I like"
 * portion?
 * You should also make sure they know all the image processing stuff you can do!!
 */

function TechStack() {
  return (
    <div className="tech-stack-page">
      <h2>What I do</h2>
      <div className="tech-stack">
        <div className="tech-item">
          <FontAwesomeIcon icon={faReact} className="fa-5x" /> <p>React</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faHtml5} className="fa-5x" />
          <p>HTML5</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faCss3} className="fa-5x" />
          <p>CSS/SASS</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faNodeJs} className="fa-5x" />
          <p>Node.js</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faFigma} className="fa-5x" />
          <p>Figma</p>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faPenNib} className="fa-5x" />
          <p>Digital Illustration</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
