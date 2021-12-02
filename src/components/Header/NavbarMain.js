import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarMain = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Nav className="d-flex">
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/stiko-empfehlungen" className="nav-link">STIKO Impfempfehlung</Link>
          <Link to="/generelle-eubersicht" className="nav-link">Generelle Übersicht</Link>
          <Link to="mainview" className="nav-link">Generelle Übersicht</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;