import {Button, Modal} from "react-bootstrap";

const InfoPopup = (props) => {

  return (
    <div className='InfoPopup'>
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Infos zur Impfung</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.infos.status}</p>
          <Button onClick={props.switchPopUp}>Schließen</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InfoPopup;