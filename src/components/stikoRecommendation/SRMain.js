import React from 'react';
import {Container, Row} from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";
import SR2021 from "./SR2021";

const SRMain = () => {

  const recommendation = SR2021()

  return (
    <Container fluid="xl">
      <Row className="bg-light mt-5 mb-5 rounded-3 pb-4 pt-5">
        <SRTable recommendation={recommendation}/>
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;