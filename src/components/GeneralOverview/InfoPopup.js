import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import { BsFillHandIndexFill } from "react-icons/bs";

/*import {GlobalContext} from "../context/GlobalState";
import React, {useRef, useState, useContext} from 'react'*/

const InfoPopup = (props) => {

  /*const {patientObject, immunizationList} = useContext(GlobalContext);

  function test(){
    console.log(patientObject);
    console.log(immunizationList);
  }*/
 function UpdateInfo (item, value){
 
  props.infos[item] = value;
 }

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
              <Col sm={4} md={4} lg={4} className="p-2" 
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('pathogen',e.target.innerText)} >
                {props.infos.pathogen}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfstoff:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('vaccine',e.target.innerText)} >
                {props.infos.vaccine}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Status:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('status',e.target.innerText)}>
                {props.infos.status}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Immunisierungsgrad:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('immun',e.target.innerText)}>
                {props.infos.immun}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfdatum:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('date',e.target.innerText)}>
                {props.infos.date}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfstelle:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('site',e.target.innerText)}>
                {props.infos.site}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Dosis in ml:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('quantity',e.target.innerText)}>
                {props.infos.quantity}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Impfgrund:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('reason',e.target.innerText)}>
                {props.infos.reason}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} md={4} lg={4}>
                Bemerkung:
              </Form.Label>
              <Col sm={4} md={4} lg={4} className="p-2"
              contentEditable suppressContentEditableWarning 
              onBlur={e =>UpdateInfo('note',e.target.innerText)}>
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