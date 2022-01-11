import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import { ButtonGroup, Col, Container, Row, ToggleButton } from "react-bootstrap";
import SRTable from "./SRTable";
import SrTableDescription from "./SRTableDescription";
import SR2021 from "./SR2021";

const SRMain = () => {

  const recommendation = SR2021()

  const { patientObject, immunizationList } = useContext(GlobalContext)
  const [patient, setPatient] = useState(patientObject ? patientObject : {})

  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Ein', value: '1' },
    { name: 'Aus', value: '2' },
  ];

  const switchPatientData = (e) => {
    setRadioValue(e.currentTarget.value)
    setPatient(Object.keys(patient).length !== 0 ? {} : patientObject)
  }

  // schöne Date-Ausgabe
  const date_toString = (date) => {
    const temp = date.split('-');
    return [temp[2], temp[1], temp[0]].join(".");
  }

  return (
    <Container fluid="xl">
      {/* <Row className="mt-5 bg-light">
        <Col className="ps-0">
          <h1>
            <span className="ps-2 pe-3">STIKO Empfehlung 2020/2021</span>
          </h1>
        </Col>
      </Row> */}
      <Row className="bg-light mt-4 rounded-3 pb-4 pt-4">
        <h1>
          <span className="ps-2 pe-3">STIKO Empfehlung 2020/2021</span>
        </h1>
        {
          (patientObject !== null && Object.keys(patientObject).length !== 0)
            ? <Row className="d-flex align-items-center mb-3">
              <Col>
                <b>Aktueller Patient: </b>
                {patientObject.name} ({patientObject.gender}),&nbsp;
                {date_toString(patientObject.birthdate)}
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
                      onChange={switchPatientData}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
            : <p />
        }
        <h6 className="mb-2" style={{ color: "#4082df" }}>Tabelle 1: Impfkalender (Standardimpfungen) für Säuglinge, Kinder, Jugendliche und Erwachsene; 2020/2021</h6>
        <SRTable
          recommendation={recommendation}
          patient={patient}
          immunizations={immunizationList}
        />
        <SrTableDescription />
      </Row>
    </Container>
  );
};

export default SRMain;