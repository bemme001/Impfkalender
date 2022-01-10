import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid={true} style={{paddingRight: "15px", paddingLeft: "15px", marginRight: "auto", marginLeft: "auto"}}>
      <hr className="w-25 m-auto mb-2 bg-white"/>
      <Row className="center" style={{backgroundColor:"rgba(39,40,44,0.05)", height: "8vh"}}>
        <Col className="text-center px-2 py-2">
          2021/22 Wahlprojekt Impfkalender
          <hr className="w-50 m-auto"/>
          Fachbereich Design Informatik Medien | Hochschule RheinMain Wiesbaden, Germany
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;