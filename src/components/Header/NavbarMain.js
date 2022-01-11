import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import { motion } from "framer-motion";
import logo from "./logo.png";
// import { BsSearch } from 'react-icons/bs';

const NavbarMain = () => {
  {/*const [searchButton, setSearchButton] = useState(false);*/}

  return (useLocation().pathname == '/' ? null : 
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
            <motion.img
                src={logo}
                width="35px"
                height="35px"
                alt="Home"
                whileHover={{rotate: [0, 360], scale: 1.4}}
                initial={{x: "-50vw"}}
                animate={{x: 0, transition: {
                    duration: 0.5
                }}}
            />
        </Navbar.Brand>
        <Nav className="d-flex align-items-center">
          {/*searchButton && <Searchbar />*/}
          <Searchbar formStyleClass="text-white transparent-input"
              buttonStyleClass="transparent-button" variantStyle="outline-light" inputSize="sm"/>
          {/*<Link to="#" className="nav-link pt-1" onClick={() => setSearchButton(!searchButton)}><BsSearch /></Link>*/}
          <Link to="/stiko-empfehlungen" className="text-white nav-link">STIKO Impfempfehlung</Link>
          <Link to="/generelle-uebersicht" className="text-white nav-link">Generelle Übersicht</Link>
        </Nav>
      </Container> 
    </Navbar>
  );
};

export default NavbarMain;