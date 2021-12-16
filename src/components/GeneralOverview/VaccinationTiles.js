import React, { useState} from 'react';
import {Card,Button, Row, Col} from "react-bootstrap";
import InfoPopup from "./InfoPopup";
import { BsFillCheckCircleFill, BsExclamationTriangleFill, BsTruck } from 'react-icons/bs';

const VaccinationTiles = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }
  const showVacTypeIcon = () =>{
    if (props.immunization.reason === 'standard')return <BsFillCheckCircleFill className='fs-5'/>
    if (props.immunization.reason === 'indikation')return <BsExclamationTriangleFill className='fs-5'/>
    if (props.immunization.reason === 'reise')return <BsTruck className='fs-5'/>
    /*Testzwecke*/
    if (props.immunization.reason === 'Drogen')return <BsFillCheckCircleFill className='fs-5'/>
    if (props.immunization.reason === 'Drogengf')return <BsExclamationTriangleFill className='fs-5'/>
    if (props.immunization.reason === 'No Value')return <BsTruck className='fs-5'/>
  }

  console.log(props)
  return (
    <div className="mb-4">
        <Card border="info">
        <Card.Header>
          <Row>
            <Col md={9}>{props.immunization.pathogen}</Col>
            <Col md={3}>  
            {showVacTypeIcon()}
              </Col>
          </Row>
        </Card.Header>
        <Card.Body>
            <Card.Title>{props.immunization.immun}</Card.Title>
            <Button variant="outline-info" onClick={switchPopUp} className="w-100">Öffnen</Button>
            {showPopUp ? <InfoPopup showPopUp={showPopUp} switchPopUp={switchPopUp} infos={props.immunization}/> : null}
        </Card.Body>
    </Card>
    </div> 
  );
};

export default VaccinationTiles;
