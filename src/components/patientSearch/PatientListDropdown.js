import React, {Dropdown} from 'react';
import {GlobalContext} from "../../context/GlobalState";


const date_toString = (date) => {
  const temp = date.split('-');
  return [temp[2], temp[1], temp[0]].join(".");
}


const PatientListDropdown =  patients => {
    let key = 0;

    const { fhirFetch } = useContext(GlobalContext);

    if (patients.total === 1) {
      fhirFetch(patients.entry[0].resource)
    }

    const globalizeObject = (patient) => {
      fhirFetch(patient)
    }

  return (
    <>
      <Dropdown>

      </Dropdown>
    </>
  )
}

export default PatientListDropdown;