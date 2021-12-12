import React from 'react';

// schöne Date-Ausgabe
const date_toString = (date) => {
  const temp = date.split('-');
  return [temp[2], temp[1], temp[0]].join(".");
}

const PatientInformation = (props) => {

    return (
      <div>
          <h1>{props.patient.name}</h1>
          <h4>Geb: {date_toString(props.patient.birthdate)}</h4>
          <h4>Geschlecht: {props.patient.gender}</h4>
          <h4>{props.patient.line}</h4>
          <h4>{props.patient.postal}, {props.patient.city}</h4>
          <h4>Tel.: {props.patient.telecom}</h4>
      </div>
  );
};

export default PatientInformation;

