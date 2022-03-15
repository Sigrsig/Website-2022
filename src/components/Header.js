import React from "react";
import logo from "../img/logo.png";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Nav,
  NavDropdown,
  Offcanvas,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" />

      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <FontAwesomeIcon icon={faEllipsisV} className="" />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Sigga Green
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
