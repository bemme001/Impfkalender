import React, { useState} from 'react';
import {Card,Button} from "react-bootstrap";
import InfoPopup from "./InfoPopup";

const VaccinationTiles = ({ title, VacType, display="d-inline" }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

const VaccinationTiles = (props) => {

  return (
    <div className="mb-4">
        <Card border="info" style={{ width: '10rem' }}>
        <Card.Header>{props.immunization.vaccinecode}</Card.Header>
        <Card.Body>
            <Card.Title>{VacType}</Card.Title>
            <Button variant="outline-info" onClick={switchPopUp} className="w-100">Öffnen</Button>
            {showPopUp ? <InfoPopup showPopUp={showPopUp} switchPopUp={switchPopUp}/> : null}
        </Card.Body>
    </Card>
    </div> 
  );
};

export default VaccinationTiles;