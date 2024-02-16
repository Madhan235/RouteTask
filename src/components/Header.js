import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
 import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
    const location = useLocation();
  return (
    <header>
         <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="">Navigating Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={NavLink} to="/charts"
            active={location.pathname === "/charts"}
            >Charts</Nav.Link>
            <Nav.Link  as={NavLink} to="/components"
            active={location.pathname === "/components"}
            >Components</Nav.Link>
            <Nav.Link  as={NavLink} to="/pages" 
            active={location.pathname === "/pages"}
            >Pages</Nav.Link>
            <Nav.Link  as={NavLink} to="/tables" 
            active={location.pathname === "/tables"}
            >Tables</Nav.Link>
            <Nav.Link as={NavLink}  to="/utilites" 
            active={location.pathname === "/utilites" }
            >Utilites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header