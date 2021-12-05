import React, {useRef, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";
import SR2021 from "./SR2021";

const SRMain = () => {

  const recommendation = SR2021()

  // Testbereich -- Start
  // const [immunization, setImmunization] = useState(null);
  // useEffectAsync( async () => {
  //   const p = await Patient.create(2698452);
  //   console.log(p)
  //   const i = await Immunization.create(p.uuid);
  //   setImmunization(i);
  // },[]);

  // function diffInMonths(birthDate, immunDate) {
  //   let date1 = new Date(birthDate)
  //   let date2 = new Date(immunDate)
  //   let years = date2.getFullYear() - date1.getFullYear()
  //   let months = (years * 12) + (date2.getMonth() - date1.getMonth())
  //   return months
  // }
  //
  // console.log('1: ' + diffInMonths("1988-10-21", "1988-11-25"))
  // console.log('2: ' + diffInMonths("1988-10-21", "1989-01-05"))
  //
  // const patient = {id: 1, birthdate: "1988-10-21"}
  // const immunization = [
  //   {id: 1, pathogen: "Rotaviren", status: "completed", immun: "G1", date: "1988-11-25"},
  //   {id: 2, pathogen: "Rotaviren", status: "completed", immun: "G2", date: "1989-01-05"},
  // ]
  // Testbereich -- End

  return (
    <Container fluid="xl">
      <Row className="bg-light mt-5 mb-5 rounded-3 pb-4 pt-5">
        <h6 className="mb-2" style={{color: "#4082df"}}>Tabelle 1: Impfkalender (Standardimpfungen) für Säuglinge, Kinder, Jugendliche und Erwachsene; 2020/2021</h6>
        <SRTable recommendation={recommendation} />
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;