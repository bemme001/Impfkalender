import React, { useState } from "react";
import Immunization from './immunization'
import { postImmunization } from '../../hooks/postImmunization'
import { Modal, Button, Form, Col, Row, FloatingLabel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Popup = (props) => {
  //const [ errors, setErrors ] = useState({});

  let immunization = new Immunization(props.uuid, props.pid, props.perf, "", "");

  {/*
  const findFormErrors = () => {
    const newErrors = {}
    //if(immunization.date == null) newErrors.date = 'Bitte wählen Sie ein Datum aus.';

    console.log(newErrors);
    return newErrors;
  }
  */}

  const handleSubmit = (event) => {
    //event.preventDefault();
    //const newErrors = findFormErrors();
    console.log(immunization.toString());

    let json = immunization.create();
    console.log(json);
    postImmunization(json);
    props.switchPopUp();

    {/*
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors);
    } else {
      let json = immunization.create();
      postImmunization(json);
      props.switchPopUp();
    }
    */}
  }

  const handleChange = (event) => {
    //immunization[event.target.name] = event.target.value;
    console.log('testtestetst');
    console.log(event);
    switch (event.target.name) {
      case 'vaccine':
        immunization.vaccine = event.target.value;
        break;
      case 'status':
        immunization.status = event.target.value;
        break;
      case 'date':
        immunization.date = event.target.value;
        break;
      case 'site':
        immunization.site = event.target.value;
        break;
      case 'dose':
        immunization.dose = event.target.value;
        break;
      case 'note':
        immunization.note = event.target.value;
        break;
      case 'reason':
        immunization.reason = event.target.value;
        break;
      case 'disease':
        immunization.disease = event.target.value;
        break;
      case 'immun':
        immunization.immun = event.target.value;
        break;
      default:
        break;
    }

    {/*
    if(!!errors[event.target.name]){
      console.log('errors');
      setErrors({...errors, [event.target.name]: null});
    }
    */}
  }

  return (
    <div className="popup">
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Impfung hinzufügen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Erreger */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Erreger
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Select aria-label="Erreger-Auswahl" name="disease"
                              defaultValue="Bitte auswählen" onChange={handleChange} >
                  <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                  {immunization.diseaseData.map((x, y) => <option key={y}>{x}</option>)}
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Impfstoff */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Impfstoff
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" name="vaccine" placeholder="Impfstoff eingeben"
                              onChange={handleChange} />
              </Col>
            </Form.Group>

            {/* Status */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Status
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Select aria-label="Status der Impfung" name="status"
                             defaultValue="Bitte auswählen" onChange={handleChange}>
                  <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                  <option value="Abgeschlossen">Abgeschlossen</option>
                  <option value="Unvollendet">Unvollendet</option>
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Immunisierungsgrad */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Immununisierungsgrad
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Select aria-label="Immunisierungsgrad" defaultValue="Bitte auswählen"
                             name="immun" onChange={handleChange}>
                  <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                  <option value="G1">Grundimmunisierung 1</option>
                  <option value="G2">Grundimmunisierung 2</option>
                  <option value="G3">Grundimmunisierung 3</option>
                  <option value="A1">Auffrischimpfung 1</option>
                  <option value="A2">Auffrischimpfung 2</option>
                  <option value="A3">Auffrischimpfung 3</option>
                  <option value="S">Standardimpfung</option>
                </Form.Select>
              </Col>
            </Form.Group>

            {/* Date Picker */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Datum
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="date" placeholder={new Date()}
                            onChange={handleChange} name="date" />
                {/*
                isInvalid={ !!errors.date }
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
                */}

              </Col>
            </Form.Group>

            {/* Impfstelle */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Impfstelle
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" placeholder="Impfstelle eingeben"
                              onChange={handleChange} name="site" />
              </Col>
            </Form.Group>

            {/* Dosis in ml */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Dosis in ml
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" placeholder="Dosis eingeben" pattern="[0-9]+((.|,)[0-9]+)?"
                              onChange={handleChange} name="dose"/>
              </Col>
            </Form.Group>

            {/* Impfgrund */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Impfgrund
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" placeholder="Impfgrund eingeben"
                              onChange={handleChange} name="reason"/>
              </Col>
            </Form.Group>

            {/* Bemerkung */}
            <FloatingLabel>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Bemerkung
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control
                  as="textarea"
                  placeholder="Bemerkungen hier eingeben"
                  style={{ height: '100px' }}
                  onChange={handleChange}
                  name="note"
                />
              </Col>
            </Form.Group>
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Speichern
            </Button>
            <Button variant="danger" type="button" onClick={props.switchPopUp}
                    className="mx-2">
              Abbrechen
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;