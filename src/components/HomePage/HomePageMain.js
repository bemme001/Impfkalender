import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Searchbar from "../Header/Searchbar";

import HomePageCardElement from "./HomePageCardElement";

const HomePageMain = () => {
  return (
    <Container fluid={true} className="p-0" >
      <Row className="px-5 py-5" style={{height: "50vh"}}>
        <Col className="text-center w-50 px-5 py-5">
          <h1 className="mb-3">Patientensuche</h1>
          <hr className="w-25 m-auto mb-3"/>
          <Searchbar formStyleClass="nontransparent-input w-50" buttonStyleClass="nontransparent-button"
                     variantStyle="outline-secondary" inputSize="lg"/>
        </Col>
      </Row>
      <Row className="w-100" style={{backgroundColor:"rgba(2, 117, 216, 0.1)", height: "50vh"}}>
        <Col md={6} className="pl-5 py-5 d-flex h-30 justify-content-center">
          <HomePageCardElement
            extraInfo="Impfkalender 2020/2021"
            name="STIKO Impfempfehlung"
            description="Standardimpfungen für Säuglinge, Kinder, Jugendliche und Erwachsene."
            link="/stiko-empfehlungen"
          />
        </Col>
        <Col md={6} className="pr-5 py-5 d-flex h-30 justify-content-center">
          <HomePageCardElement
            extraInfo="Extra information"
            name="Generelle Übersicht"
            description="Alle Impfungen ihres Patienten auf einen Blick"
            link="generelle-uebersicht"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageMain;