import React from 'react';
import {Card,Button} from "react-bootstrap";

const VaccinationTiles = ({ title, VacType, display="d-inline" }) => {
  return (
     <div className="mb-4">
        <Card border="info" class={display}>
        <Card.Header><h4>{title}</h4></Card.Header>
        <Card.Body>
            <Card.Title>{VacType}</Card.Title>
            <Button variant="outline-info" className="w-100">Öffnen</Button>
        </Card.Body>
    </Card>
    </div> 
  );
};

export default VaccinationTiles;