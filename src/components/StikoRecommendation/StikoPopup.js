import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const StikoPopup = (props) => {
    console.log("spawning with", props)
    return (
        <div className='StikoPopup'>
            <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Vergleich der Impfung "{props.infos.pathogen}" zur STIKO-Empfehlung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Erreger
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.pathogen} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Impfstoff
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.vaccine} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Status
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.status} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Immunisierungsgrad
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.immun} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Datum
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.date} />
                            </Col>
                        </Form.Group>

                        {props.colors == "orange" ?
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3} md={5} lg={3}>
                                    empfohlener Zeitraum
                                </Form.Label>
                                <Col sm={3} md={5} lg={3}>
                                    <Form.Control plaintext readOnly defaultValue="{props.infos.todo}" />
                                </Col>
                            </Form.Group> : null
                        }

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Impfstelle
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.site} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Dosis in ml
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.quantity} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Impfgrund
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control plaintext readOnly defaultValue={props.infos.reason} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={3}>
                                Bemerkung
                            </Form.Label>
                            <Col sm={3} md={5} lg={3}>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                    defaultValue={props.infos.note}
                                    placeholder="Bemerkungen hier eingeben"
                                />
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={props.infos.switchPopUp}>Schließen</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default StikoPopup;