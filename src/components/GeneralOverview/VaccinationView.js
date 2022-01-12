import { Col, Row, Card } from "react-bootstrap";
import React, { useState } from 'react'
import AddImmunization from "../addImmunization/AddImmunization";
import AddDisease from "./AddDisease";
import VaccinationTiles from "./VaccinationTiles";
import AgeTileBoard from "./AgeTileBoard";
import { VaccinationTypeFilter } from './helper/buttons'
import { getAgeDifference, numberInBetween, numberIsBigger } from "./helper/helper";
import ageRanges from "./helper/ageRange";

export default function VaccinationView({ vaccinations, patient }) {
    const [filter, setFilter] = useState({
        searchText: '',
        ageRange: { start: -1, end: -1 },
        vaccineType: 'all',
    });

    vaccinations = filterVaccinations(vaccinations, patient, filter);

    return (
        <>
            <Col md={2}>
                <Card>
                    <Card.Title style={{ marginLeft: '15px' , marginTop: '25px'}}>
                        Altersfilter
                    </Card.Title>
                    <Card.Body>
                        <AgeTileBoard
                            ageRanges={ageRanges}
                            onFilterAge={(start, end) => {
                                setFilter({
                                    ...filter,
                                    ageRange: { start, end }
                                })
                            }} />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={10}>
                <Row className="mb-3">
                    <Col md={5}>
                        <div className="btn-group" role="group">
                            <AddImmunization
                                uuid={patient.uuid}
                                pid={patient.id}
                                perf='Practitioner/2691497'
                            />
                            <span className="me-3" />
                            <AddDisease />
                        </div>
                    </Col>
                    <Col md={7} className='d-flex flex-row-reverse'>
                        <VaccinationTypeFilter
                            onChange={
                                e => {
                                    setFilter({
                                        ...filter,
                                        vaccineType: e.target.value,
                                    })
                                }
                            }>
                        </VaccinationTypeFilter>
                    </Col>
                    <Col md={12}>
                        <hr className='w-100' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 className="mb-3">Durchgeführte Impfungen</h5>
                        <div className="btn-group mb-3" role="group">
                            <input className="form-control" type="text" placeholder="Durchsuche Impfungen" onChange={e => setFilter({ ...filter, searchText: e.target.value })} />
                            <div className="ms-5">Angezeigte Impfungen: {vaccinations.length}</div>
                        </div>
                        <VaccinationTileBoard vaccinations={vaccinations} patient={patient} />
                    </Col>
                </Row>
            </Col>
        </>
    );
}

function VaccinationTileBoard({ vaccinations, patient }) {
    return (
        <Row xs="auto">
            {vaccinations.map((v, key) => {
                return <Col md={3} key={key}>
                        <VaccinationTiles immunization={v} patient={patient} />
                    </Col>
            })}
        </Row>
    );

}

function filterVaccinations(vaccinations, patient, filter) {
    const { searchText, ageRange, vaccineType } = filter;

    return vaccinations
        //Input filter
        .filter(v => {
            return v.pathogen.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase(), 0)
        })
        //VaccinationType filter
        .filter(v => {
            if (vaccineType === 'all') {
                return true;
            }
            return v.reason === vaccineType;
        })
        // AgeRangeFilter
        .filter(v => {
            const birthdate = new Date(patient.birthdate);
            const vaccinationDate = new Date(v.date);

            return filterAgeRange(birthdate, vaccinationDate, ageRange);

        })
}

function filterAgeRange(birthdate, vaccinationDate, ageRange) {
    const age = getAgeDifference(birthdate, vaccinationDate);

    if (ageRange.start === -1 && ageRange.end === -1) {
        return true;
    }

    if (ageRange.end === -1) {
        return numberIsBigger(age, ageRange.start);
    }

    return numberInBetween(age, ageRange.start, ageRange.end);
}