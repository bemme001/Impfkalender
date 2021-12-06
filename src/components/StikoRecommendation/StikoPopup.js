import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const formatMonthNumber = (dateNumber) => {
    // dateNumber in Jahren angeben
    if (dateNumber > 12) {
        // Jahre + restliche Monate angeben
        const append = dateNumber % 12 != 0
            ? `und ${dateNumber % 12}. Monat`
            : ``;
        return `${dateNumber / 12}. Jahr` + append;
    }
    // dateNumber in Monaten angeben
    else return `${dateNumber}. Monat`;
}

// toString für Zeitraum
const dateRange = (from, to) => {
    if (from == to) return `im ${formatMonthNumber(from)}`;
    else return `vom ${formatMonthNumber(from)} bis zum ${formatMonthNumber(to)}`;
}

const StikoPopup = ({ showPopUp, switchPopUp, infos, colors, element }) => {
    return (
        <div className='StikoPopup'>
            <Modal show={showPopUp} onHide={switchPopUp} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {infos.pathogen + ": " + (colors == "orange"
                            ? "verspätet"
                            : "rechtzeitig") + " verimpft"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Erreger:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.pathogen} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfstoff:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.vaccine} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Status:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.status} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Immunisierungsgrad:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.immun} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Datum:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.date} />
                            </Col>
                        </Form.Group>

                        {/* "empfohlener Zeitraum" wird nur bei verspäteter Impfung angezeigt */}
                        {colors == "orange" ?
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3} md={5} lg={5}>
                                    empfohlener Zeitraum:
                                </Form.Label>
                                <Col sm={3} md={5} lg={5}>
                                    <Form.Control
                                        plaintext readOnly
                                        defaultValue={dateRange(element.r_start, element.r_end)} />
                                </Col>
                            </Form.Group> : null
                        }

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfstelle:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.site} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Dosis in ml:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.quantity} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Impfgrund:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readOnly defaultValue={infos.reason} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} md={5} lg={5}>
                                Bemerkung:
                            </Form.Label>
                            <Col sm={3} md={5} lg={5}>
                                <Form.Control plaintext readonly defaultValue={infos.note} />
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={infos.switchPopUp}>Schließen</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default StikoPopup;