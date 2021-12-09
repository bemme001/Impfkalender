import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import Searchbar from "./Searchbar"

const NavbarMain = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto me-auto">
            <Searchbar />
          </Nav>
          <Nav >
            <Link to="/" className="nav-link">Startseite</Link>
            <Link to="/stiko-empfehlungen" className="nav-link">STIKO Impfempfehlung</Link>
            <Link to="/generelle-uebersicht" className="nav-link">Generelle Übersicht</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;