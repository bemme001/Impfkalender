import React, {useEffect, useState} from 'react';

const PatientInformation = (props) => {
    if(props.patient == undefined){
        return <div>Kein Patient</div>
    }

    return (
      <div>
          <h1>{props.patient.name}</h1>
          <h4>Geschlecht: {props.patient.gender} Geb: {props.patient.birthdate}</h4>
          <h4>{props.patient.line}</h4>
          <h4>{props.patient.postal}, {props.patient.city}</h4>
          <h4>Tel.: {props.patient.telecom}</h4>
      </div>
  );
};

export default PatientInformation;

