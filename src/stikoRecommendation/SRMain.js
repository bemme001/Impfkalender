import React from 'react';
import {Container, Row} from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";

const SRMain = () => {
  return (
    <Container fluid="xl">
      <Row className="bg-light mt-5 mb-5 rounded-3 pb-4 pt-5">
        <SRTable />
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;