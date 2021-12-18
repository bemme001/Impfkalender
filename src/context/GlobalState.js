import React, {createContext, useEffect, useState} from "react";
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

    useEffect(() => {

        let val1 = localStorage.getItem("patient");
        let val2 = localStorage.getItem("immunization");

        console.log(val1);
        console.log(val2);

        if(val1 !== null && val2 !== null){
            setPatientObject(JSON.parse(val1));
            setImmunizationList(JSON.parse(val2));
        }
    }, []);

    async function fhirFetch(patientId) {
        let patient, immunization;
        patient = await Patient.create(patientId);
        immunization = await Immunization.create(patient.uuid);

        setPatientObject(patient);
        setImmunizationList(immunization);

        localStorage.setItem("patient", JSON.stringify(patient));
        localStorage.setItem("immunization", JSON.stringify(immunization));

        let val1 = JSON.parse(localStorage.getItem("patient"));
        let val2 = JSON.parse(localStorage.getItem("immunization"));

        console.log(val1);
        console.log(val2);

        console.log(patient);
        console.log(immunization);
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