import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { DateInput, NumberInput, TextInput, Dropdown } from "./input";
import { statusOptions, immunOptions, reasonOptions } from "./DropdownOptions";
import { checkForms } from "./FromCheck";
import { usePathogenLoader } from "./usePathogenLoader";
import { submitVaccinationInfoChange } from "./submitVaccinationInfoChange";

function InfoPopup({ switchPopUp, showPopUp, infos, patient }) {
  const [editable, setEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const pathogenOptions = usePathogenLoader([], errors, setErrors);
  const [vaccination, setVaccination] = useState(infos);

  function handleChange(key, value) {
    setVaccination({ ...vaccination, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const checkedErrors = checkForms(vaccination, patient);
    const zeroErrors = Object.entries(checkedErrors).length === 0;
    setErrors(checkedErrors);
    console.log('errors', errors);
    if (zeroErrors) {
      if (submitVaccinationInfoChange(vaccination, patient)) {
        setEditable(false)
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

            <NumberInput
              label="Dosis in ml"
              name="dose"
              value={vaccination.dose}
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
                  }}
                  className="mx-2">
                  Verwerfen
                </Button>
                <Button
                  variant="danger"
                  type="submit">
                  Speichern
                </Button>
              </>
              :
              <>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => { switchPopUp() }}
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

