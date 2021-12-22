import React, {useState} from 'react';
import Popup from "./Popup";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; // TODO braucht man das?

const AddImmunization = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

  return (
    <div>
      <Button
        type="button"
        variant="outline-success"
        onClick={switchPopUp}>
        Impfung hinzufügen
      </Button>
      {showPopUp
        ? <Popup showPopUp={showPopUp} switchPopUp={switchPopUp}
                 uuid={props.uuid} pid={props.pid} perf={props.perf}/>
        : null}
    </div>
  );
}

export default AddImmunization;


