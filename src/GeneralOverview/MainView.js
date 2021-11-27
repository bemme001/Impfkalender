import React, {useEffect, useRef, useState} from 'react'
import {Col, Container, Row, Dropdown, Card, Button} from "react-bootstrap";
import AgeTiles from "./AgeTiles";
import VaccinationTiles from "./VaccinationTiles";
import PatientInformation from './PatientInformations';
import Patient from "./Patient";
import Immunization from "./Immunization";
import useEffectAsync from "../hooks/useEffectAsync";
import { Markup } from 'interweave';

const id = 2691490;








/* var numberOfImz = 3;//Länge des Arrays nachpflegen
var iterationPoint = 0;

function generateStructureOfTiles(props){
    //generate Tiles and fill up with empty Cols if needed.
    let listOfTileGroups = [];
    let counter = 0;
    let maxLength = 0;
    //ermittle maximale Menge an Cols anhand von numberOfImz % 5 === 0 (wenn ungerade, fülle auf bis gerade)
    if(numberOfImz % 5 === 0){
        maxLength = numberOfImz;
    } else {
        let add = 0;
        while((numberOfImz+add) % 5 !== 0){
            add++;
        }
        maxLength = numberOfImz+add; //Länge der Imz + filler
    }
} */

/* function Generate(props){
    let tiles = []
    let counter = 0;
    //Wenn die differenz zwischen iterationPoint+5 und numberOfImz größer 1 und kleiner 5 ist, fülle den Rest mit leeren <Col> auf.
    
    for (let i = 1; i <= 5; i++) {
      if(counter < numberOfImz-iterationPoint){
        tiles.push(<Col ><VaccinationTiles title  ="Malaria" VacType="G1"/></Col>);
        counter++;
      }else{
        tiles.push(<Col ></Col>);
      }
    }
    iterationPoint += 5;
    console.log(tiles);
    return tiles;
}

function GenerateImmunizationTilesStructure(props) {

    let rowList = [];

    for (let i = 1; i <= numberOfImz; i++) {
        if(i === 1 || i === 6 || i === 11 || i === 16 || i === 21){
            rowList.push(
                <Row className="equal px-4" key={i}>
                  {Generate()}
                </Row>
            );      
        }  
    }
return 1;
   
} */


export default function MainView() {

    const cacheuuid = useRef(null);
    const [patient, setPatient] = useState(null);
    const [immunization, setImmunization] = useState(null);
    const [year, setYear] = useState(60);
    const [month, setMonth] = useState(24)
    let patientAge;
    let numOfImz;

    useEffectAsync( async () => {
        const p = await Patient.create(id);
        setPatient(p);
        cacheuuid.current = p.uuid;

        const i = await Immunization.create(cacheuuid.current);
        setImmunization(i);
        if(immunization) numOfImz = Object.keys(immunization).length;//Undefined Problem
    },[]);
 

    function check(counter) {
        if(immunization){
            return immunization[counter];
        }
        return undefined;
    }


  
    function returnOneTile(counter){
        return "<Col ><VaccinationTiles immunization={check(" + {counter} + ")}/></Col>"
    }
    
    function returnRow(){     
        
        console.log(Immunization.imzLength);
        let e = ["<Col ><VaccinationTiles immunization={check(i)}/></Col>", "<Col ><VaccinationTiles immunization={check(i)}/></Col>"]
        for (let i = 0; i < 5; i++) {
            //TODO
        }
      
        return <Row className="equal px-4"><Col></Col></Row>
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
                                       {/*  <Col > <VaccinationTiles vaccinecode = {check(0).immunization.vaccinecode} status={check(0).immunization.status}/></Col> */}
                                       {/*  <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col>
                                        <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col>
                                        <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col>
                                        <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col> */}
                                    </Row>
                                    <Row className="equal px-4">
                                        {/* <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col>
                                        <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col>
                                        <Col > <VaccinationTiles vaccinecode = {check(0).vaccinecode} status={check(0).status}/></Col> */}
                                        <Col></Col>
                                        <Col></Col>  
                                    </Row>
                                    {returnRow()}
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
