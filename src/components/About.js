import React from "react";
import { Row } from "react-bootstrap";
import mePic from "../img/me-pic.jpg";
import { Container, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about-me">
      <h2 className="my-name">Sigríður Ösp Green Sigurðardóttir</h2>
      <Container>
        <Row className="me-info">
          <Col>
            <img src={mePic} className="me-pic" />
          </Col>
          <Col className="description">
            <p>
              I'm Sigga, a Front-end developer from Iceland currently living in
              Berlin. I've recently finished my final year of computer science
              with the University of Iceland and am very excited to start
              getting some hands on experience in web development.
            </p>
            <p>
              During my time at university I've learned a wide variety of
              skills, but I've taken a special liking to web development and UX.
              Currently I am focusing on gaining a better understanding of
              React, as well as getting more experience in backend languages and
              frameworks.{" "}
            </p>
            <p>
              In my free time I can be found busy in the kitchen or curling up
              with my cats, reading. I also have a huge interest in board games
              and tabletop RPGs.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
