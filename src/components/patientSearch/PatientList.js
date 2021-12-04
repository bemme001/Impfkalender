import React from 'react';
import { Link, Navigate } from "react-router-dom"
import { Table, Button } from "react-bootstrap";

const PatientList = ({ patients }) => {
    let key = 0;

    return (
        <>
            {patients.total === 1 
            ? <Navigate to='/mainview' state={patients.entry[0]} />
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
                                to="/mainview"
                                state={ 
                                    patient
                                }
                            >
                                <Button
                                    variant="light"
                                    id="patient_overview_button"
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