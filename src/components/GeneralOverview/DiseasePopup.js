import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function DiseasePopup(props) {
  const [diseaseData, setDiseaseData] = useState(null);
  const [newDisease, setNewDisease] = useState(null);
  const [errors, setErrors]  = useState({});


  useEffect(() => {
    fetch('http://localhost:3001/diseaseData')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDiseaseData(data);
      })
  }, [] );


  const checkDups = () => {
    setErrors({});
    for(let i = 0; i < diseaseData.length; i++){
      if(diseaseData[i].name === newDisease){
        setErrors({duplicate: "Dieser Erreger existiert bereits!"})
        return false;
      }
    }
    return true;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    let diseaseAsObj = {"name": newDisease};

    if(checkDups()){
      fetch('http://localhost:3001/diseaseData', {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(diseaseAsObj)
      })
      props.switchPopUp();
    }
  };


  return (
    <div className="add_disease_container">
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            Erreger hinzufügen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} md={5} lg={3}>
              Liste der Erreger
            </Form.Label>
            <Col sm={9} md={7} lg={9}>
              <Form.Select defaultValue="Liste bereits eingetragener Erreger">
                <option disabled hidden>Liste bereits eingetragener Erreger</option>
                {diseaseData && diseaseData.map((disease, key) => <option key={key} disabled="disabled">{disease.name}</option>)}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Erreger eingeben
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type='text' name='disease'
                              onChange={event => setNewDisease(event.target.value)}
                              isInvalid={!!errors.duplicate} required/>
                <Form.Control.Feedback type="invalid">
                  {errors.duplicate}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Speichern
            </Button>
            <Button variant="danger" type="button" onClick={props.switchPopUp}
                    className="mx-2">
              Abbrechen
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

    </div>
  )
}

export default DiseasePopup;

