import React from 'react';
import {Card,Button} from "react-bootstrap";

const VaccinationTiles = ({ title, VacType }) => {
  return (
    <div className="mb-4">
        <Card border="info" style={{ width: '10rem' }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Title>{VacType}</Card.Title>
            <Button variant="outline-primary" className="w-100">Open</Button>
        </Card.Body>
    </Card>
    </div>
  );
};

export default VaccinationTiles;