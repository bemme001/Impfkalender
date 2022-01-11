import React, {createContext, useEffect, useState} from "react";
import Patient from "../components/GeneralOverview/Patient";
import Immunization from "../components/GeneralOverview/Immunization";
import axios from "axios";

const initialState = {
    patient : null,
    immunization : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [patientObject, setPatientObject] = useState(initialState.patient);
    const [immunizationList, setImmunizationList] = useState(initialState.immunization);

    useEffect(() => {

        let val1 = localStorage.getItem("b3b69232-601e-11ec-8607-0242ac130002");
        let val2 = localStorage.getItem("b3b69534-601e-11ec-8607-0242ac130002");

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

        localStorage.setItem("b3b69232-601e-11ec-8607-0242ac130002", JSON.stringify(patient));
        localStorage.setItem("b3b69534-601e-11ec-8607-0242ac130002", JSON.stringify(immunization));

        let val1 = JSON.parse(localStorage.getItem("b3b69232-601e-11ec-8607-0242ac130002"));
        let val2 = JSON.parse(localStorage.getItem("b3b69534-601e-11ec-8607-0242ac130002"));
    }

    async function fetchPatient(patientID) {
        return await axios
            .get(`http://hapi.fhir.org/baseR4/Patient/${patientID}`, {
                "ContentType": "application/fhir+json;charset=utf-8"
            })
    }

    async function reloadPatient(patientID) {
        const patient = await fetchPatient(patientID);
        fhirFetch(patient.data);
    }

    async function addImmunization(item) {
        await setImmunizationList(oldArray => [...oldArray, item]);
    }

    return(
        <GlobalContext.Provider value = {{patientObject, reloadPatient,
            immunizationList, fhirFetch, addImmunization}}>
            {children}
        </GlobalContext.Provider>
    )
}