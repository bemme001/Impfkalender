import React, { useContext } from 'react';
import { Link, Navigate } from "react-router-dom"
import { Table, Button } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState"

const PatientList = ({ patients }) => {
    let key = 0;

    const { fhirFetch } = useContext(GlobalContext);

    if (patients.total === 1 ) {
        fhirFetch(patients.entry[0].resource)
    }

    const globalizeObject = (patient) => {
        fhirFetch(patient)
    }

    return (
        <>
            {patients.total === 1 
            ? <Navigate to='/generelle-uebersicht' />
            : <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.entry.map((patient) => 
                        <tr key={key++}>
                            <td>
                            <Link
                                to="/generelle-uebersicht"
                            >
                                <Button
                                    variant="light"
                                    id="patient_overview_button"
                                    onClick={() => globalizeObject(patient.resource)}
                                    type="submit"
                                >
                                {patient.resource.name[0].text}
                                </Button>
                            </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            }
        </>
    )
}

export default PatientList;