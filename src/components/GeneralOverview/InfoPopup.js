import {Button, Modal} from "react-bootstrap";

const InfoPopup = (props) => {

  return (
    <div className='InfoPopup'>
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Infos zur Impfung: {props.infos.pathogen}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>{props.infos.pathogen}</p>
          <p>{props.infos.vaccine}</p>
          <p>{props.infos.status}</p>
          <p>{props.infos.immun}</p>
          <p>{props.infos.date}</p>
          <p>{props.infos.site}</p>
          <p>{props.infos.quantity}</p>
          <p>{props.infos.reason}</p>
          <p>{props.infos.note}</p>

          <Button onClick={props.switchPopUp}>Schließen</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InfoPopup;