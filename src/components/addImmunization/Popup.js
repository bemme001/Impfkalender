import React, { useState, useEffect, useContext } from "react";
import ImmunizationJson from './immunization'
import { postImmunization } from '../../hooks/postImmunization'
import { Modal, Button, Form, Col, Row, FloatingLabel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalContext} from "../../context/GlobalState";
import Immunization from "../GeneralOverview/Immunization";

const Popup = (props) => {
  const [ errors, setErrors ] = useState({});
  const [immunization, setImmunization] = useState(
    new ImmunizationJson(props.uuid, props.pid, props.perf, "", "")
  );
  const [diseaseData, setDiseaseData] = useState(null);
  const {patientObject, addImmunization} = useContext(GlobalContext);

  const findFormErrors = () => {
    const newErrors = {};
    const regexDose = new RegExp('[0-9]+((.|,)[0-9]+)?');
    const now = new Date().getTime();
    const immuDate = new Date(immunization.date).getTime();
    const birthday = new Date(patientObject.birthdate).getTime();

    if(!!errors.diseaseErr) newErrors.diseaseErr = errors.diseaseErr;
    if(immunization.disease === undefined) newErrors.disease = "Bitte wählen Sie einen Erreger aus.";
    if(immunization.vaccine === undefined) newErrors.vaccine = "Bitte geben Sie einen Impfstoff an.";
    if(immunization.vaccine && immunization.vaccine.length > 200) newErrors.vaccine = "Bitte geben Sie nicht mehr als 200 Zeichen ein."
    if(immunization.status === undefined) newErrors.status = "Bitte wählen Sie einen Impfstatus aus.";
    if(immunization.immun === undefined) newErrors.immun = "Bitte wählen Sie einen Immunisierungsgrad aus.";
    if(immunization.date === undefined) newErrors.date = "Bitte wählen Sie ein Datum aus.";
    if(immuDate > now) newErrors.date = "Bitte wählen Sie ein Datum aus, das nicht in der Zukunft liegt.";
    if(immuDate < birthday) newErrors.date = "Bitte wählen Sie ein Datum aus, an dem der Patient schon lebte.";
    if(immunization.site === undefined) newErrors.site = "Bitte geben Sie an wo Sie am Körper geimpft haben.";
    if(immunization.site && immunization.site.length > 200) newErrors.site = "Bitte geben Sie nicht mehr als 200 Zeichen ein."
    if(immunization.dose === undefined) newErrors.dose = "Bitte geben Sie an wie viel Imstoff (in ml) Sie verabreicht haben.";
    if(immunization.dose && immunization.dose < 0) newErrors.dose = "Bitte geben Sie einen positiven Wert ein.";
    if(!regexDose.test(immunization.dose)) newErrors.dose = "Bitte geben Sie eine Zahl ein."; //pattern="[0-9]+((.|,)[0-9]+)?"
    return newErrors;
  }

  const addLocalImmunization = () => {
    let element = new Immunization(
        immunization.pid,
        immunization.disease,
        immunization.vaccine,
        immunization.status,
        immunization.immun,
        immunization.date,
        immunization.site,
        immunization.dose,
        immunization.reason,
        immunization.note
    )
    addImmunization(element);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors);
    } else {
      let json = create();
      postImmunization(json);
      addLocalImmunization();
      props.switchPopUp();
    }
  }

  const handleChange = (event) => {
    setImmunization({...immunization, [event.target.name]: event.target.value});

    if(!!errors[event.target.name]){
      setErrors({...errors, [event.target.name]: null});
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/diseaseData")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDiseaseData(data);
        setErrors({...errors, "diseaseErr": null})
      })
      .catch(() =>
        setErrors({...errors, "diseaseErr": "Erreger konnten nicht geladen werden!"})
      )
  }, [] );

  const create = () => {                  // returns: JSON gefühlt mit den Daten des Objektes
  return ({
    resourceType: "Immunization",
    identifier: [{
      system: "urn:ietf:rfc:3986",
      value: immunization.uuid
    }],
    status: immunization.status,
    vaccineCode: {
      text: immunization.vaccine
    },
    patient: {
      reference: `Patient/${immunization.pid}`
    },
    occurrenceDateTime: immunization.date,
    site: {
      text: immunization.site
    },
    doseQuantity: {
      value: immunization.dose,
      system: "http://unitsofmeasure.org",
      code: "mL"
    },
    performer: {
      actor: {
        reference: immunization.perf
      }
    },
    note: {
      text: immunization.note
    },
    reasonCode: {
      text: immunization.reason
    },
    protocolApplied: {
      targetDisease: {
        text: immunization.disease
      },
      doseNumberString: immunization.immun
    }
  });
};

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
                              defaultValue="Bitte auswählen" onChange={handleChange}
                             isInvalid={ !!errors.disease || !!errors.diseaseErr }>
                  <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                  {diseaseData && diseaseData.map((x, y) => <option key={y}>{x.name}</option>)}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {!!errors.diseaseErr ? errors.diseaseErr : errors.disease}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Impfstoff */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Impfstoff
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" name="vaccine" placeholder="Impfstoff eingeben"
                              onChange={handleChange} isInvalid={ !!errors.vaccine }/>
                <Form.Control.Feedback type="invalid">
                  {errors.vaccine}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Status */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Status
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Select aria-label="Status der Impfung" name="status"
                             defaultValue="Bitte auswählen" onChange={handleChange}
                             isInvalid={ !!errors.status }>
                  <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                  <option value="completed">Abgeschlossen</option>
                  <option value="not-done">Unvollendet</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Immunisierungsgrad */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Immununisierungsgrad
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Select aria-label="Immunisierungsgrad" defaultValue="Bitte auswählen"
                             name="immun" onChange={handleChange} isInvalid={ !!errors.immun }>
                  <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                  <option value="G1">Grundimmunisierung 1</option>
                  <option value="G2">Grundimmunisierung 2</option>
                  <option value="G3">Grundimmunisierung 3</option>
                  <option value="A1">Auffrischimpfung 1</option>
                  <option value="A2">Auffrischimpfung 2</option>
                  <option value="A3">Auffrischimpfung 3</option>
                  <option value="S">Standardimpfung</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.immun}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Date Picker */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Datum
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="date" placeholder={new Date()}
                            onChange={handleChange} name="date" isInvalid={ !!errors.date }/>

                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>

              </Col>
            </Form.Group>

            {/* Impfstelle */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Impfstelle
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" placeholder="Impfstelle eingeben"
                              onChange={handleChange} name="site"
                              isInvalid={ !!errors.site }/>
                <Form.Control.Feedback type="invalid">
                  {errors.site}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Dosis in ml */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} md={5} lg={3}>
                Dosis in ml
              </Form.Label>
              <Col sm={9} md={7} lg={9}>
                <Form.Control type="text" placeholder="Dosis eingeben"
                              onChange={handleChange} name="dose" isInvalid={ !!errors.dose }/>
                <Form.Control.Feedback type="invalid">
                  {errors.dose}
                </Form.Control.Feedback>
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