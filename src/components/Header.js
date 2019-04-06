import React from "react";
import "../styles/index.css"
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = props => {
  return (
    <Navbar expand="sm" >
      <Navbar.Brand exact to="/" as={Link}>
        AAAA
        </Navbar.Brand>
      <Link to="/smthn">aa</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar >
          <Nav.Link>okokokok</Nav.Link>
          <Nav.Link >aaaa</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>AAAA</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}