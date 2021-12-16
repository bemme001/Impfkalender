import React, {useContext, useEffect, useState} from 'react'
import {Col, Container, Row, Card, Button, Form} from "react-bootstrap";
import VaccinationTiles from "./VaccinationTiles";
import PatientInformation from './PatientInformations';
import AddImmunization from "../addImmunization/AddImmunization";
import AddDisease from "./AddDisease";
import AgeTileBoard from "./AgeTileBoard";
import {GlobalContext} from "../../context/GlobalState";
import actions from './filter/actions';
import {getAgeDifference} from './filter/helper';
import './GO.css';

const id = 2698452;

export default function MainView() {

  let key = 0;

  const {patientObject, immunizationList} = useContext(GlobalContext);
  const [filter, setFilter] = useState(() => actions[0].handler);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // Test Bereich - Start
  console.log('actions: ', actions)
  console.log('filter: ', filter)

  const [vaccineType, setVaccineType] = useState('all')
  const renderImmunizationTiles = () => {
    if (vaccineType === 'all') {
      return immunizationTiles(immunizationList)
    }
    return immunizationTiles(immunizationList.filter(e => e.reason === vaccineType))
  }
  // Test Bereich - End
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  const immunizationTiles = (immunizations) => {
    if (immunizations) {
      return (
        <Row xs="auto">
          {immunizations.filter((immu => {
            // check if patient object is available for filter
            if (!patientObject) {
              return true;
            }
            const birthdate = new Date(patientObject.birthdate);
            const vaccinationDate = new Date(immu.date);

            const age = getAgeDifference(birthdate, vaccinationDate);
            return filter(age);

          })).map((element) =>
            <Col key={key++}>
              <VaccinationTiles immunization={element}/>
            </Col>
          )}
        </Row>
      )
    }
    return null;
  }

  const patientInformations = () => {
    if (patientObject) {
      console.log(patientObject);
      return (
        <PatientInformation patient={patientObject}/>
      )
    }
    return null;
  }

  return (
    <div>
      <Container fluid="xl">

        {/* Page title */}
        <Row className="mt-5 mb-4">
          <Col className="ps-0">
            <h1>
              <span className="bg-light ps-2 pe-3">Generelle Übersicht</span>
            </h1>
          </Col>
        </Row>

        {/* Personal infos */}
        <Row className="bg-light py-3 rounded-3">
          <Col>
            {patientInformations()}
          </Col>
        </Row>

        {/* Info about immunisation */}
        <Row className="bg-light py-4 rounded-3 mt-4">
          {/* Filter
              todo: vertical to horizontal? WARN: col 2 - 10 isnt really responsive
              todo: title?
              todo: do we need btns maybe just as a link?
           */}
          <Col md={2}>
            <Card>
              <Card.Body>
                <AgeTileBoard
                  actions={actions}
                  handler={(filterAction) => {
                  setFilter(() => filterAction);
                }}/>
              </Card.Body>
            </Card>
          </Col>
          {/* Impfungen allgemein */}
          <Col md={10}>
            {/* Buttons Impfung/Erreger hinzufügen */}
            <Row className="mb-3">
              <Col md={12}>
                <div className="btn-group" role="group">
                  {patientObject && <AddImmunization
                    uuid={ patientObject.uuid }
                    pid={ patientObject.id }
                    perf='Practitioner/2691497'
                  />}
                  <span className="me-3" />
                  <AddDisease/>
                </div>
                <hr className="mt-4 mb-0" />
              </Col>
            </Row>


            {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            {/*Test Bereich - Start*/}
            <Row>
              <Col className="mb-3">
                <Form.Select aria-label="Filter example"
                             className="w-25"
                             onChange={(e) => setVaccineType(e.target.value)}>
                  <option value="all">All</option>
                  <option value="Drogen">Drogen</option>
                  <option value="asd">Asd</option>
                </Form.Select>
                <hr className="mt-4 mb-0" />
              </Col>
            </Row>
            {/*Test Bereich - End*/}
            {/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}


            {/* Durchgeführte Impfungen */}
            <Row>
              <h5 className="mb-3">Durchgeführte Impfungen</h5>
              {/* todo: todo necessary refactoring*/}
              {renderImmunizationTiles()}
              {/*{immunizationTiles()}*/}
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
