import React, {useEffect, useRef, useState} from 'react'
import {Col, Container, Row, Dropdown, Card, Button} from "react-bootstrap";
import AgeTiles from "./AgeTiles";
import VaccinationTiles from "./VaccinationTiles";
import PatientInformation from './PatientInformations';
import Patient from "./Patient";
import Immunization from "./Immunization";
import useEffectAsync from "../hooks/useEffectAsync";

const id = 2691490;

export default function MainView() {

    const cacheuuid = useRef(null);
    const [patient, setPatient] = useState(null);
    const [immunization, setImmunization] = useState(null);
    const [year, setYear] = useState(60);
    const [month, setMonth] = useState(24)
    let patientAge;


    useEffectAsync( async () => {
        const p = await Patient.create(id);
        setPatient(p);
        cacheuuid.current = p.uuid;

        const i = await Immunization.create(cacheuuid.current);
        setImmunization(i);
    },[]);

    function check(counter) {
        if(immunization){
            return immunization[counter];
        }
        return undefined;
    }

    return (
        <div>
            <Container fluid /*className="bg-light border rounded-2 mt-4"*/>
                <Row>
                    <Col>
                        <Container fluid /*className="bg-light border rounded-2 mt-4"*/>
                            <Row>
                                <Col>
                                    <PatientInformation patient={patient}/>
                                </Col>
                            </Row>
                        </Container>   
                    </Col>
                </Row>
                <Row>     
                    <Col md={1}></Col>
                    <Col md={2}>        
                        <Card>
                            <Card.Body>
                                <div className="mb-4">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Alter in Jahren
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Alter in Monaten</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>  
                  
                                <AgeTiles range="60+" /> 
                                <AgeTiles range="18-60" /> 
                                <AgeTiles range="17" /> 
                                <AgeTiles range="15-16" /> 
                                <AgeTiles range="9-14" /> 
                                <AgeTiles range="7-8" /> 
                                <AgeTiles range="5-6" /> 
                                <AgeTiles range="2-4" /> 

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>        
                        <Card>
                            <Card.Body>
                                <div className="mb-4">
                                    <Button variant="primary">Neue Impfung hinzufügen</Button>{' '}
                                </div>
                                <Container fluid="xl" >
                                    <Row className="equal px-4">
                                        <Col > <VaccinationTiles immunization={check(0)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(1)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(2)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(3)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(4)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(5)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(6)}/></Col>
                                        <Col > <VaccinationTiles immunization={check(7)}/></Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={1}></Col>   
                </Row>
            </Container>
        </div>
    )
}
