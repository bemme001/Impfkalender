import React, { useState} from 'react';
import {Card,Button} from "react-bootstrap";
import InfoPopup from "./InfoPopup";

const VaccinationTiles = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

  return (
    <div className="mb-4">
        <Card border="info" style={{ width: '10rem' }}>
        <Card.Header>{props.immunization.pathogen}</Card.Header>
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