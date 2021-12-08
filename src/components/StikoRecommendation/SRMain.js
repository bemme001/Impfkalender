import React from 'react';
import {Container, Row} from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";
import SR2021 from "./SR2021";

const SRMain = () => {

  const recommendation = SR2021()

  // Testbereich -- Start
  const patient = {id: 1, birthdate: "2008-10-21"}
  // const patient = {}
  const immunizations = [
    {id: 1, pathogen: "Rotaviren", vaccine: "Impfstoff1",  status: "completed", immun: "G1",  date: "2008-11-25", site: "right arm", quantity: "123", reason: "reason"},
    {id: 2, pathogen: "Rotaviren",  status: "completed", immun: "G2",  date: "2009-06-05"},
    {id: 3, pathogen: "Diphtherie", status: "completed", immun: "G1", date: "2008-12-05"},
    {id: 3, pathogen: "Diphtherie", status: "completed", immun: "G2", date: "2009-06-05"},
    {id: 3, pathogen: "Diphtherie", status: "completed", immun: "G3", date: "2013-06-05"},
  ]
  // Testbereich -- End

  return (
    <Container fluid="xl">
      <Row className="bg-light mt-5 mb-5 rounded-3 pb-4 pt-5">
        <h6 className="mb-2" style={{color: "#4082df"}}>Tabelle 1: Impfkalender (Standardimpfungen) für Säuglinge, Kinder, Jugendliche und Erwachsene; 2020/2021</h6>
        <SRTable
          recommendation={recommendation}
          patient={patient}
          immunizations={immunizations}
        />
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;