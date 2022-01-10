import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import stikoImg from "./stiko-img.png";

const HomePageCardElement = ({ extraInfo = "---",
                         name = "---",
                         description = "---",
                         link = "---"}) => {
  return (
    <Card className="text-center text-white" style={{ width: '30rem', backgroundColor: '#0d6efd',
          backgroundImage: 'linear-gradient(135deg, #0d6efd 50%, #629df5 80%)', borderRadius: '25px' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '30px'}}>{name}</Card.Title>
        <Card.Img src={stikoImg} alt='Bild kann nicht angezeigt werden!' style={{borderRadius: '50%', width: '200px'}}/>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <Button variant="outline-light text-white">Öffnen</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomePageCardElement;

