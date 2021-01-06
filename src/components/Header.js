import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Ocean See Food</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">View Orders</Nav.Link>
          <Nav.Link href="#item">Item Management</Nav.Link>
          <Nav.Link href="#user">User Management</Nav.Link>
          <Nav.Link href="#customer">Customer Management</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
