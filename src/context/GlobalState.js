import React, {createContext, useReducer, useState} from "react";
import  AppReducer from './AppReducer';
import Patient from "../GeneralOverview/Patient";
import Immunization from "../GeneralOverview/Immunization";

const initialState = {
    patient : null,
    immunization : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    //const [state, dispatch] = useReducer(AppReducer, initialState);
    const [patientObject, setPatientObject] = useState(initialState.patient);
    const [immunizationList, setImmunizationList] = useState(initialState.immunization);

    async function fhirFetch(patientId) {
        let patient, immunization;

        patient = await Patient.create(patientId);
        immunization = await Immunization.create(patient.uuid);

        setPatientObject(patient);
        setImmunizationList(immunization);
    }

    /*function addImmunization(item) {
        dispatch({
            type: 'ADD_IMMUNIZATION',
            payload: item
        });
    }*/

    return(
        <GlobalContext.Provider value = {{patientObject,
            immunizationList, fhirFetch}}>
            {children}
        </GlobalContext.Provider>
    )
}