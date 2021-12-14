import { Button, Form, Modal, Col, Row } from "react-bootstrap";
/*import {GlobalContext} from "../context/GlobalState";
import React, {useRef, useState, useContext} from 'react'*/

const InfoPopup = (props) => {

  /*const {patientObject, immunizationList} = useContext(GlobalContext);

  function test(){
    console.log(patientObject);
    console.log(immunizationList);
  }*/

  return (
    <div className='InfoPopup'>
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Infos zur Impfung: {props.infos.pathogen}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="info_popup">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Erreger:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.pathogen}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfstoff:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.vaccine}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Status:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.status}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Immunisierungsgrad:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.immun}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfdatum:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.date}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfstelle:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.site}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Dosis in ml:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.quantity}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfgrund:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.reason}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Bemerkung:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2">
                {props.infos.note}
              </Col>
            </Form.Group>
          </Form>

          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

          {/*<p>{test()}</p>*/}

          <Button onClick={props.switchPopUp}>Schließen</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InfoPopup;