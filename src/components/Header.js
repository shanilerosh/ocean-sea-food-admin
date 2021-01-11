import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand>Ocean See Food</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/panel">View Orders</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/item">Item Management</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/user">User Management</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
