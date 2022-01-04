import React, { useState} from 'react';
import {Card, Button, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import InfoPopup from "./InfoPopup";
import { BsFillCheckCircleFill, BsExclamationTriangleFill, BsTruck } from 'react-icons/bs';
import './GO.css';
import { getAgeDifference } from './filter/helper';

// schöne Date-Ausgabe
const date_toString = (date) => {
  const temp = date.split('-');
  return [temp[2], temp[1], temp[0]].join(".");
}

const VaccinationTiles = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

  const showVacTypeIcon = () =>{
    if (props.immunization.reason === 'standard') {
      return <OverlayTrigger
               placement='top'
               overlay={<Tooltip id={`tooltip-top`}>Standardimpfung</Tooltip>}
             ><Button className="clear-btn"><BsFillCheckCircleFill className='fs-5'/></Button>
             </OverlayTrigger>
    }
    if (props.immunization.reason === 'indikation') {
      return <OverlayTrigger
               placement='top'
               overlay={<Tooltip id={`tooltip-top`}>Indikationsimpfung</Tooltip>}
             ><Button className="clear-btn"><BsExclamationTriangleFill className='fs-5'/></Button>
             </OverlayTrigger>
    }
    if (props.immunization.reason === 'reise') {
      return <OverlayTrigger
               placement='top'
               overlay={<Tooltip id={`tooltip-top`}>Reiseimpfung</Tooltip>}
             ><Button className="clear-btn"><BsTruck className='fs-5'/></Button>
             </OverlayTrigger>
    }
  }

  function getAge() {
    const result = getAgeDifference(new Date(props.birthdate), new Date(props.immunization.date));
    return result;
  }

  return (
    <div className="mb-4">
        <Card border="info">
        <Card.Header style={{minHeight: "65px"}}>
          <Row>
            <Col md={9}>{props.immunization.pathogen}</Col>
            <Col md={3} className="p-0 d-flex justify-content-center align-items-start">
              {showVacTypeIcon()}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
            <Card.Title>{props.immunization.immun}</Card.Title>
            <div>Datum: {date_toString(props.immunization.date)}</div>
            <div>Alter {getAge()}</div>
            <Button variant="outline-info" onClick={switchPopUp} className="w-100">Öffnen</Button>
            {showPopUp ? <InfoPopup showPopUp={showPopUp} switchPopUp={switchPopUp} infos={props.immunization}/> : null}
        </Card.Body>
    </Card>
    </div> 
  );
};

export default VaccinationTiles;
