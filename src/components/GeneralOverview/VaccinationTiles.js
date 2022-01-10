import React, { useState } from 'react';
import { Card, Button, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import InfoPopup from "./VaccinationInfo/VaccinationInfoPopUp";
import { BsFillCheckCircleFill, BsExclamationTriangleFill, BsTruck } from 'react-icons/bs';
import './GO.css';
import { getAgeDifference } from './helper/helper';

const vReasonDictionary = {
  standard: {
    name: 'Standardimpfung',
    symbol: <BsFillCheckCircleFill className='fs-5' />
  },
  indikation: {
    name: 'Indikationsimpfung',
    symbol: <BsExclamationTriangleFill className='fs-5' />
  },
  reise: {
    name: 'ReiseImpfung',
    symbol: <BsTruck className='fs-5' />
  },
}

// schöne Date-Ausgabe
const date_toString = (date) => {
  console.log('date', date);
  const temp = date.split('-');
  return [temp[2], temp[1], temp[0]].join(".");
}

function VaccinationTiles({ patient, immunization }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const { reason, pathogen, date, immun } = immunization;

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

  const toolTip = vReasonDictionary.hasOwnProperty(reason) ? vReasonDictionary[reason] : { name: 'ToolTip unbekannt' };

  function getAge() {
    const result = getAgeDifference(new Date(patient.birthdate), new Date(immunization.date));
    return result;
  }

  return (
    <div className="mb-4">
      <Card border="info">
        <Card.Header style={{ minHeight: "65px" }}>
          <Row>
            <Col md={9}>{pathogen}</Col>
            <Col md={3} className="p-0 d-flex justify-content-center align-items-start">
              <VaccinationOverlayTrigger toolTipText={toolTip.name} symbol={toolTip.symbol} />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Title>{immun}</Card.Title>
          <div>Datum: {date_toString(date)}</div>
          <div>Alter {getAge()}</div>
          <Button variant="outline-info" onClick={switchPopUp} className="w-100">Öffnen</Button>
          {showPopUp && <InfoPopup showPopUp={showPopUp} switchPopUp={switchPopUp} infos={immunization} patient={patient} />}
        </Card.Body>
      </Card>
    </div>
  );
}

function VaccinationOverlayTrigger({ toolTipText, symbol }) {
  return <OverlayTrigger
    placement='top'
    overlay={<Tooltip id={`tooltip-top`}>{toolTipText}</Tooltip>}
  >
    <Button className="clear-btn">{symbol}</Button>
  </OverlayTrigger>
}

export default VaccinationTiles;
