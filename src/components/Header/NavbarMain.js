import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import Searchbar from "./Searchbar";
import { BsSearch } from 'react-icons/bs';

const NavbarMain = () => {
  const [searchButton, setSearchButton] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav className="d-flex align-items-center">
          {searchButton && <Searchbar />}
          <Link to="#" className="nav-link pt-1" onClick={() => setSearchButton(!searchButton)}><BsSearch /></Link>
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/stiko-empfehlungen" className="nav-link">STIKO Impfempfehlung</Link>
          <Link to="/generelle-uebersicht" className="nav-link">Generelle Übersicht</Link>
        </Nav>
      </Container> 
    </Navbar>
  );
};

export default NavbarMain;