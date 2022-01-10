import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const HomePageCardElement = ({ extraInfo = "---",
                         name = "---",
                         description = "---",
                         link = "---"}) => {
  return (
    <MotionCard whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="text-center text-white" style={{ width: '30rem', backgroundColor: '#0d6efd',
          backgroundImage: 'linear-gradient(135deg, #0d6efd 50%, #629df5 80%)', borderRadius: '25px' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '30px'}}>{name}</Card.Title>
        <Card.Img alt='Bild kann nicht angezeigt werden!' style={{borderRadius: '50%', width: '200px'}}/>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <Button variant="outline-light text-white">Öffnen</Button>
        </Link>
      </Card.Body>
    </MotionCard>
  );
};

export default HomePageCardElement;

