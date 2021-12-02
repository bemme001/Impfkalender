import React from 'react';
import { GetPatientList } from "../../hooks/getPatientList"
import { useParams } from "react-router-dom"

import PatientList from "./PatientList" 
import NotFound from "./NotFound"

const PatientSearch = () => {
    const { value } = useParams();
    const { data, isSuccess } = GetPatientList(value);

    console.log(data)

    return (
        <>
            {isSuccess && (
                data.total === 0 
                ? <NotFound /> 
                : <PatientList patients={data} />
            )}
        </>
    )
}

export default PatientSearch;