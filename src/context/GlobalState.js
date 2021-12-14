import React, {createContext, useState} from "react";
import Patient from "../components/GeneralOverview/Patient";
import Immunization from "../components/GeneralOverview/Immunization";

const initialState = {
    patient : null,
    immunization : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [patientObject, setPatientObject] = useState(initialState.patient);
    const [immunizationList, setImmunizationList] = useState(initialState.immunization);

    async function fhirFetch(patientId) {
        let patient, immunization;
        patient = await Patient.create(patientId);
        immunization = await Immunization.create(patient.uuid);

        setPatientObject(patient);
        setImmunizationList(immunization);
    }

    async function addImmunization(item) {
        await setImmunizationList(oldArray => [...oldArray, item]);
    }

    return(
        <GlobalContext.Provider value = {{patientObject,
            immunizationList, fhirFetch, addImmunization}}>
            {children}
        </GlobalContext.Provider>
    )
}