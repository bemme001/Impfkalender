import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import HomePageCardElement from "./HomePageCardElement";

const HomePageMain = () => {
  return (
    <Container fluid="xl" className="bg-light border rounded-2 mt-5">
      <Row>
        <Col className="text-center py-3">
          <h1 className="mb-3">Navigationsseite</h1>
          <hr className="w-50 m-auto mb-3"/>
        </Col>
      </Row>
      <Row className="equal px-4">
        <Col md={4} className="px-4 pb-5 d-flex justify-content-center">
          <HomePageCardElement
            extraInfo="Impfkalender 2020/20212"
            name="STIKO Impfempfehlung"
            description="Standardimpfungen für Säuglinge, Kinder, Jugendliche und Erwachsene."
            link="/stiko-empfehlungen"
          />
        </Col>
        <Col md={4} className="px-4 pb-5 d-flex justify-content-center">
          <HomePageCardElement
            extraInfo="Extra information"
            name="Name"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageMain;