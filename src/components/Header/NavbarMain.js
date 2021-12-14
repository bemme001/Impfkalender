import React, {useState} from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import Searchbar from "./Searchbar";
import { BsSearch } from 'react-icons/bs';

const NavbarMain = () => {
  const [searchButton, setSearchButton] = useState(false);

  const switchSearchButton = () => {
    setSearchButton(!searchButton);
  }

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav className="d-flex align-items-center">
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/stiko-empfehlungen" className="nav-link">STIKO Impfempfehlung</Link>
          <Link to="/generelle-uebersicht" className="nav-link">Generelle Übersicht</Link>
          {searchButton ? <Searchbar /> : null}
          <Link to="#" className="nav-link pt-1" onClick={switchSearchButton}><BsSearch /></Link>
          {/*<Button onClick={switchSearchButton}> <BsSearch /> </Button>*/}
        </Nav>
      </Container> 
    </Navbar>
  );
};

export default NavbarMain;