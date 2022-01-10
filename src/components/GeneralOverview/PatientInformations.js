import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";

// schöne Date-Ausgabe
const date_toString = (date) => {
  const temp = date.split('-');
  return [temp[2], temp[1], temp[0]].join(".");
}

const PatientInformation = () => {

  const {patientObject} = useContext(GlobalContext);

  return (
      <div>
        <h5>Patient: {patientObject.name}</h5>
        <hr className="mt-3 mb-3"/>
        <table className="table table-borderless w-50 mb-0" id="go-personal-date">
          <tbody>
          <tr>
            <td className="w-7r">Geb:</td>
            <td>{date_toString(patientObject.birthdate)}</td>
          </tr>
          <tr>
            <td>Geschlecht:</td>
            <td>{patientObject.gender}</td>
          </tr>
          <tr>
            <td>Adresse:</td>
            <td>{patientObject.line}, {patientObject.postal}, {patientObject.city}</td>
          </tr>
          <tr>
            <td>Tel.:</td>
            <td>{patientObject.telecom}</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
};

export default PatientInformation;