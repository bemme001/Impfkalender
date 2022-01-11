import React, { useContext } from 'react'
import { Container, Row } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState";
import './GO.css';
import PatientView from './PatientView';
import VaccinationView from './VaccinationView';
import { motion } from "framer-motion";

const MotionContainer = motion(Container);
// import React, { useContext, useEffect, useState, Fragment, useRef } from 'react'
// import { Container, Row, Card, Button, Form, InputGroup, Col } from "react-bootstrap";
// import VaccinationTiles from "./VaccinationTiles";
// import PatientInformation from './PatientInformations';
// import AddImmunization from "../addImmunization/AddImmunization";
// import AddDisease from "./AddDisease";
// import AgeTileBoard from "./AgeTileBoard";
// import { getAgeDifference } from './helper/helper';
// import { useSSRSafeId } from '@react-aria/ssr';

//const id = 2698452;

export default function MainView() {
  const { patientObject, immunizationList } = useContext(GlobalContext);

  if (!patientObject || !immunizationList) {
    return <div>Patient und Immunisierung nicht verfügbar</div>
  }

  return (
    <MotionContainer fluid="xl" 
        exit={{ x: '100vw', transition: {ease: 'easeInOut'}}}
        animate={{ x: 0, transition: { delay: 0.25, ease: 'easeInOut' }}}
        initial={{ x: '100vw'}}
    >
      <Row className="mt-5 mb-4">
        <h1 className="bg-white ps-2 pe-3">Generelle Übersicht</h1>
      </Row>
      <Row className="bg-white py-3 rounded-3">
        <PatientView patient={patientObject} />
      </Row>
      <Row className="bg-light py-4 rounded-3 mt-4">
        <VaccinationView vaccinations={immunizationList} patient={patientObject} />
      </Row>
    </MotionContainer>
  );
}

// const vaccination = {
//   id: "2696876",
//   pathogen: "Hibb – H. influenzae Typ b",
//   vaccine: "test",
//   status: "completed",
//   immun: "G1",
//   date: "2021-11-20",
//   site: "Nase",
//   quantity: "100 mL",
//   reason: "Drogen",
//   note: "No Value"
// }

// return <TestContainer />

// export function TestContainer() {
  //   return <InfoPopup showPopUp={true} switchPopUp={() => null} infos={undefined} patientObject={{ birthdate: "1960-01-01" }} />
  // }
