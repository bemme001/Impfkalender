import React from 'react';

// schöne Date-Ausgabe
const date_toString = (date) => {
  const temp = date.split('-');
  return [temp[2], temp[1], temp[0]].join(".");
}

const PatientInformation = (props) => {
  return (
    <div>
      <h5>Patient: {props.patient.name}</h5>
      <hr className="mt-3 mb-3"/>
      <table className="table table-borderless w-50 mb-0" id="go-personal-date">
        <tr>
          <td className="w-7r">Geb:</td>
          <td>{date_toString(props.patient.birthdate)}</td>
        </tr>
        <tr>
          <td>Geschlecht:</td>
          <td>{props.patient.gender}</td>
        </tr>
        <tr>
          <td>Adresse:</td>
          <td>{props.patient.line}, {props.patient.postal}, {props.patient.city}</td>
        </tr>
        <tr>
          <td>Tel.:</td>
          <td>{props.patient.telecom}</td>
        </tr>
      </table>
    </div>
  );
};

export default PatientInformation;

