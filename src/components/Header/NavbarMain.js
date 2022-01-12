import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./logo.png";
// import { BsSearch } from 'react-icons/bs';

const MotionNavbar = motion(Navbar);

const NavbarMain = () => {
    const location = useLocation()
    return (location.pathname === '/' ? null : 
        <AnimatePresence>
            <MotionNavbar bg="primary" variant="dark" sticky="top"
                initial={{y: '-10vw', opacity: 0}}
                animate={{y: 0, opacity: 1, transition: {
                    ease: "easeIn"
                }}}
                exit={{y: '-10vw', opacity: 0, transition: {
                    ease: 'easeOut'
                }}}
            >
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
                    <Searchbar formStyleClass="text-white transparent-input"
                        buttonStyleClass="transparent-button" variantStyle="outline-light" inputSize="sm"/>
                    {location.pathname === '/stiko-empfehlungen' 
                    ? <div className="text-white nav-link">STIKO Impfempfehlung</div>
                    : <Link to="/stiko-empfehlungen" className="text-white nav-link">
                        STIKO Impfempfehlung
                    </Link>
                    }
                    {location.pathname === '/generelle-uebersicht' 
                    ? <div className="text-white nav-link">Generelle Übersicht</div>
                    : <Link to="/generelle-uebersicht" className="text-white nav-link">
                        Generelle Übersicht
                    </Link>
                    }
                    </Nav>
                </Container> 
            </MotionNavbar>
        </AnimatePresence>
    );
};

export default NavbarMain;