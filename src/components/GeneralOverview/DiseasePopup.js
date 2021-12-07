import React from "react";
import { useState } from "react";
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function DiseasePopup(props) {
  //const [diseaseData, setDiseaseData] = useState(null);
  const [newDisease, setNewDisease] = useState(null);


  /*
  useEffect(() => {
    fetch('http://localhost:3001/diseaseData')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDiseaseData(data);
      })
  }, [] );
  */


  const handleSubmit = (event) => {
    event.preventDefault();
    let diseaseAsObj = {"name": newDisease};

    fetch('http://localhost:3001/diseaseData', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(diseaseAsObj)
    })
    props.switchPopUp();
  };


  return (
    <div className="add_disease_container">
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            Erreger hinzufügen <br/>
            (Start the JSON Server in a second terminal: npx json-server --watch data/DiseaseDB.json --port 3001)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*<ul>
            {diseaseData && diseaseData.map((disease, key) => <li key={key}>{disease.name}</li>)}
          </ul>*/}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Erreger
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <input type='text' name='disease' onChange={event => setNewDisease(event.target.value)} required/>
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

