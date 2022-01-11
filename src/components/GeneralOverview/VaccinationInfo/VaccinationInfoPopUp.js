import { Button, Form, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { DateInput, TextInput, Dropdown } from "./input";
import { statusOptions, immunOptions, reasonOptions } from "./DropdownOptions";
import { checkForms } from "./FromCheck";
import { usePathogenLoader } from "./usePathogenLoader";
import { submitVaccinationInfoChange } from "./submitVaccinationInfoChange";
import { GlobalContext } from '../../../context/GlobalState';


function InfoPopup({ switchPopUp, showPopUp, infos, patient }) {
  const { fhirFetch } = useContext(GlobalContext);
  const [editable, setEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const pathogenOptions = usePathogenLoader([], errors, setErrors);
  const [vaccination, setVaccination] = useState(infos);

  const [submitMessage, setSubmitMessage] = useState('');

  let color = 'black'
  switch (submitMessage) {
    case 'success':
      color = 'green';
      break;
    case 'error':
      color = 'red';
    default:
      break;
  }

  function handleChange(key, value) {
    setVaccination({ ...vaccination, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
    const checkedErrors = checkForms(vaccination, patient);
    const zeroErrors = Object.entries(checkedErrors).length === 0;
    setErrors(checkedErrors);
    console.log('errors', errors);
    if (zeroErrors) {
      const response = await submitVaccinationInfoChange(vaccination, patient);
      if (response) {
        setSubmitMessage('success');

        // Aktualsieren des PatientenObjektes nach erfolgreichem Update
        console.log('fhirFetch new patient', patient.id);
        fhirFetch(patient.id);
      }
      else {
        setSubmitMessage('error');
      }
    }
  }

  return (
    <div className='InfoPopup'>
      <Modal show={showPopUp} onHide={switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Infos zur Impfung: {infos.pathogen}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Dropdown
              label="Erreger"
              name="pathogen"
              infos={infos}
              value={vaccination.pathogen}
              options={pathogenOptions}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <TextInput
              label="Impfstoff"
              name="vaccine"
              value={vaccination.vaccine}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />
            <Dropdown
              label="Status"
              value={vaccination.status}
              name="status"
              options={statusOptions}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <Dropdown
              label="Immunisierungsgrad"
              name="immun"
              value={vaccination.immun}
              options={immunOptions}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <DateInput
              label="Datum der Impfung"
              name="date"
              value={vaccination.date}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <TextInput
              label="Impfstelle"
              name="site"
              value={vaccination.site}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <TextInput
              label="Dosis in ml"
              name="quantity"
              value={vaccination.quantity}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <Dropdown
              label="Impfgrund"
              name="reason"
              options={reasonOptions}
              value={vaccination.reason}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            <TextInput
              label="Bemerkung"
              name="note"
              value={vaccination.note}
              editable={editable}
              onChange={handleChange}
              errors={errors}
            />

            {editable ?
              <>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    setVaccination({ ...infos });
                    setEditable(!editable)
                    setSubmitMessage('');
                  }}
                  className="mx-2">
                  Verwerfen
                </Button>
                <Button
                  variant="danger"
                  type="submit">
                  Speichern
                </Button>
                <span style={{ marginLeft: '20px', color: color }}>{submitMessage}</span>
              </>
              :
              <>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => switchPopUp() }
                  className="mx-2">
                  Abbrechen
                </Button>
                <Button
                  variant="warning"
                  type="button"
                  onClick={() => setEditable(!editable)}
                  className="mx-2">
                  Bearbeiten
                </Button>
              </>
            }
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InfoPopup;

