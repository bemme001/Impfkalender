import React from 'react'
import {Col, Container, Row, Dropdown, Card, Button} from "react-bootstrap";
import AgeTiles from "./AgeTiles";
import VaccinationTiles from "./VaccinationTiles";
import PatientInformation from './PatientInformations';

export default function MainView() {
    return (
        <div>
            <Container fluid /*className="bg-light border rounded-2 mt-4"*/>
                <Row>
                    <Col>
                        <Container fluid /*className="bg-light border rounded-2 mt-4"*/>
                            <Row>
                                <Col>   
                                    <PatientInformation />
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
                                        
                                        <Col ><VaccinationTiles title  ="Malaria" VacType="G1"/></Col>
                                        <Col ><VaccinationTiles title  ="Covid-19" VacType="G1"/></Col>
                                        <Col > <VaccinationTiles title  ="Masern" VacType="G1"/></Col>
                                        <Col > <VaccinationTiles title  ="Malaria" VacType="G1"/></Col>
                                        <Col > <VaccinationTiles title  ="Malaria" VacType="G1" /></Col> 
                                    </Row>
                                    <Row className="equal px-4">
                                        
                                        <Col ><VaccinationTiles title  ="Malaria" VacType="G1"/></Col>
                                        <Col ><VaccinationTiles title  ="Malaria" VacType="G1"/></Col>
                                        <Col > <VaccinationTiles title  ="Malaria" VacType="G1"/></Col>
                                        <Col > <VaccinationTiles title  ="Malaria" VacType="G1" display="d-none"/></Col>
                                        <Col > <VaccinationTiles title  ="Malaria" VacType="G1" display="d-none"/></Col>
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
