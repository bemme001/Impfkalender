import React, {useRef, useState, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState'
import {ButtonGroup, Col, Container, Row, ToggleButton} from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";
import SR2021 from "./SR2021";

const SRMain = () => {

  const recommendation = SR2021()

  // Testbereich -- Start
  // const patient = {id: 1, birthdate: "2008-10-21"}
  // const patient = {}
  // const immunizations = [
  //   {id: 1, pathogen: "Rotaviren", vaccine: "Impfstoff1",  status: "completed", immun: "G1",  date: "2008-11-25", site: "right arm", quantity: "123", reason: "reason"},
  //   {id: 2, pathogen: "Rotaviren",  status: "completed", immun: "G2",  date: "2009-06-05"},
  //   {id: 3, pathogen: "Diphtherie", status: "completed", immun: "G1", date: "2008-12-05"},
  //   {id: 3, pathogen: "Diphtherie", status: "completed", immun: "G2", date: "2009-06-05"},
  //   {id: 3, pathogen: "Diphtherie", status: "completed", immun: "G3", date: "2013-06-05"},
  // ]
  // Testbereich -- End
  // const [patient, setPatient] = useState({})

  let {patientObject, immunizationList} = useContext(GlobalContext)

  // console.log('BEFORE, patient: ', patient)
  // console.log('BEFORE, patientObject: ', patientObject)

  // if (patientObject) {
  //   setPatient(patientObject)
  // }

  if (!patientObject) {
    patientObject = {}
  }

  // console.log('AFTER, patient: ', patient)
  // console.log('AFTER, patientObject: ', patientObject)

  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Ein', value: '1' },
    { name: 'Aus', value: '2' },
  ];

  return (
    <Container fluid="xl">
      <Row className="mt-5">
        <Col>
          <h1>
            STIKO Empfehlung 2020/2021
          </h1>
        </Col>
      </Row>
      <Row className="bg-light mt-4 mb-5 rounded-3 pb-4 pt-4">
        {
          Object.keys(patientObject).length !== 0
            ? <Row className="d-flex align-items-center mb-3">
                <Col>
                  <b>Aktueller Patient: </b>
                  {patientObject.name} ({patientObject.gender}),&nbsp;
                  {patientObject.birthdate}
                </Col>
                <Col className="d-flex justify-content-end">
                  <div className="pt-2 mx-2">Patientendaten:</div>
                  <ButtonGroup>
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-danger' : 'outline-primary'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                          setRadioValue(e.currentTarget.value)
                        }}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Col>
              </Row>
            : <p/>
        }
        <h6 className="mb-2" style={{color: "#4082df"}}>Tabelle 1: Impfkalender (Standardimpfungen) für Säuglinge, Kinder, Jugendliche und Erwachsene; 2020/2021</h6>
        <SRTable
          recommendation={recommendation}
          patient={patientObject}
          immunizations={immunizationList}
        />
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;