import React, {useRef, useState} from 'react'
import {Col, Container, Row, Dropdown, Card } from "react-bootstrap";
import AgeTiles from "./AgeTiles";
import VaccinationTiles from "./VaccinationTiles";
import PatientInformation from './PatientInformations';
import useEffectAsync from "../hooks/useEffectAsync";
import AddImmunization from "../components/addImmunization/AddImmunization"
import AddDisease from "./AddDisease"
import {GlobalContext} from "../context/GlobalState";

const id = 2698452;


export default function MainView() {

    let key = 0;
    /*
    const cacheuuid = useRef(null);
    const [patient, setPatient] = useState(null);
    const [immunization, setImmunization] = useState(null);
    //const [year, setYear] = useState(60);
    //const [month, setMonth] = useState(24)
    //let patientAge;


    useEffectAsync( async () => {
        const p = await Patient.create(id);
        setPatient(p);
        cacheuuid.current = p.uuid;

        const i = await Immunization.create(cacheuuid.current);
        setImmunization(i);

        const interval = setInterval(async () => {
            const i = await Immunization.create(cacheuuid.current);
            setImmunization(i);
        }, 1000);
        return () => clearInterval(interval);

    },[]);
    */

    const {fhirFetch, patientObject, immunizationList} = useContext(GlobalContext);

    useEffectAsync( async () => {
        await fhirFetch(id);
    },[]);

    const immunizationTiles = () => {
        if(immunizationList){
            return(
                <Row xs="auto">
                {immunizationList.map((element) =>
                        <Col key={key++}>
                            <VaccinationTiles immunization={element}/>
                        </Col>
                    )}
                </Row>
            )
        }
        return null;
    }

    const patientInformations = () => {
        if(patientObject){
            return(
                <PatientInformation patient={patientObject}/>
            )
        }
        return null;
    }

    return (
        <div>
            <Container fluid /*className="bg-light border rounded-2 mt-4"*/>
                <Row>
                    <Col>
                        <Container fluid /*className="bg-light border rounded-2 mt-4"*/>
                            <Row>
                                <Col>
                                    {patientInformations()}
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
                                <AddImmunization
                                    uuid='urn:uuid:6d7fea63c34a40f698b2aa34e5ea13b1'
                                    pid='2698452'
                                    perf='Practitioner/2691497'
                                />
                                  {/*<Button variant="primary">Neue Impfung hinzufügen</Button>{' '}*/}
                                </div>
                                <AddDisease/>
                                <Container fluid="xl" >
                                    {immunizationTiles()}
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
