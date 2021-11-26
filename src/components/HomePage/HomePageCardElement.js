import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomePageCardElement = ({ extraInfo = "---",
                         name = "---",
                         description = "---",
                         link = "---"}) => {
  return (
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>{extraInfo}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <Button variant="outline-primary" className="w-100">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomePageCardElement;