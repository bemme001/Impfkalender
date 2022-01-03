import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomePageCardElement = ({ extraInfo = "---",
                         name = "---",
                         description = "---",
                         link = "---"}) => {
  return (
    <Card className="border-secondary text-center" style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <Button variant="outline-secondary">Öffnen</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomePageCardElement;