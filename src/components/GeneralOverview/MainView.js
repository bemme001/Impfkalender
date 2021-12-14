import React, {useContext, useEffect, useState} from 'react'
import {Col, Container, Row, Card} from "react-bootstrap";
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

  const {fhirFetch, patientObject, immunizationList} = useContext(GlobalContext);
  const [filter, setFilter] = useState(() => actions[0].handler);

  useEffect(() => {
    fhirFetch(id);
  }, []);

  const immunizationTiles = () => {
    if (immunizationList) {
      return (
        <Row xs="auto">
          {immunizationList.filter((immu => {
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
              <Col>
                <div className="btn-group" role="group">
                  <AddImmunization
                    uuid='urn:uuid:6d7fea63c34a40f698b2aa34e5ea13b1'
                    pid='2698452'
                    perf='Practitioner/2691497'
                  />
                  <span className="me-3" />
                  <AddDisease/>
                </div>
                <hr className="mt-4 mb-0" />
              </Col>
            </Row>
            {/* Durchgeführte Impfungen */}
            <Row>
              <h5 className="mb-3">Durchgeführte Impfungen von {patientObject.name}:</h5>
              {/* todo: todo necessary refactoring*/}
              {immunizationTiles()}
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
