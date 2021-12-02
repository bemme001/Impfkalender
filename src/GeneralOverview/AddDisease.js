import React from "react";
import {useEffect, useState} from "react";
import Test from './Test'

function AddDisease() {
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
  };


  return (
    <div className="add_disease_container">
      <ul>
        {diseaseData && diseaseData.map((disease, key) => <li key={key}>{disease.name}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' name='disease' onChange={event => setNewDisease(event.target.value)}/>
        <input type='submit' value='Speichern'/>
      </form>
    </div>
  )
}

export default AddDisease
