import React, { useContext, useState } from 'react'
import {Col, Container, Row, Card } from "react-bootstrap";
import VaccinationTiles from "./VaccinationTiles";
import PatientInformation from './PatientInformations';
import useEffectAsync from "../../hooks/useEffectAsync";
import AddImmunization from "../addImmunization/AddImmunization";
import AddDisease from "./AddDisease";
import AgeTileBoard from "./AgeTileBoard";
import {GlobalContext} from "../../context/GlobalState";
import actions from './filter/actions';
import { getAgeDifference } from './filter/helper';

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
   const [filter, setFilter] = useState(() => actions[0].handler);

    useEffectAsync( async () => {
        await fhirFetch(id);
    },[]);

    const immunizationTiles = () => {
        if(immunizationList){
            return(
                <Row xs="auto">
                {immunizationList.filter((immu => {
                        // check if patient object is available for filter
                        if(!patientObject) {
                            return true;
                        }
                        const birthdate = new Date(patientObject.birthdate);
                        const vaccinationDate = new Date(immu.date);

                        const age = getAgeDifference(birthdate, vaccinationDate);
                        return filter(age);

                    })).map((element) =>
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
                                {/* <div className="mb-4">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Alter in Jahren
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Alter in Monaten</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>   */}
                                
                                <AgeTileBoard actions={actions} handler={(filterAction) => {
                                    setFilter(() => filterAction);
                                }}/>
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
