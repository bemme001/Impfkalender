import React, {useRef, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";
import SR2021 from "./SR2021";
import Immunization from "../GeneralOverview/Immunization";
import useEffectAsync from "../../hooks/useEffectAsync";
import Patient from "../GeneralOverview/Patient";

const SRMain = () => {

  const recommendation = SR2021()

  // Testbereich -- Start
  const [immunization, setImmunization] = useState(null);
  useEffectAsync( async () => {
    const p = await Patient.create(2698452);
    const i = await Immunization.create(p.uuid);
    setImmunization(i);
  },[]);
  // Testbereich -- End

  return (
    <Container fluid="xl">
      <Row className="bg-light mt-5 mb-5 rounded-3 pb-4 pt-5">
        <h6 className="mb-2" style={{color: "#4082df"}}>Tabelle 1: Impfkalender (Standardimpfungen) für Säuglinge, Kinder, Jugendliche und Erwachsene; 2020/2021</h6>
        <SRTable recommendation={recommendation}/>
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;