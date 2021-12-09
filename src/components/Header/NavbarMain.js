import React, {useState} from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import Searchbar from "./Searchbar"

const NavbarMain = () => {
  const [searchButton, setSearchButton] = useState(false);

  const switchSearchButton = () => {
    setSearchButton(!searchButton);
  }

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav>
          <button onClick={switchSearchButton}>Suche</button>
          {searchButton ? <Searchbar /> : null}

        </Nav>
        <Nav className="d-flex">
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/stiko-empfehlungen" className="nav-link">STIKO Impfempfehlung</Link>
          <Link to="/generelle-uebersicht" className="nav-link">Generelle Übersicht</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;