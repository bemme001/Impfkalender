import React from "react";
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";


function DiseasePopup(props) {
  const [diseaseData, setDiseaseData] = useState(null);
  const [newDisease, setNewDisease] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/diseaseData')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDiseaseData(data);
      })
  }, [] );


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
          <Modal.Title>Erreger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {diseaseData && diseaseData.map((disease, key) => <li key={key}>{disease.name}</li>)}
            <br/>
          </ul>
          <form onSubmit={handleSubmit}>
            Start the JSON Server in a second terminal: npx json-server --watch data/DiseaseDB.json --port 3001
            <br/>
            <input type='text' name='disease' onChange={event => setNewDisease(event.target.value)}/>
            <input type='submit' value='Speichern'/>
          </form>
          <Button onClick={props.switchPopUp}>Schließen</Button>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default DiseasePopup;

