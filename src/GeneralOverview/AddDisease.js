import {Card,Button} from "react-bootstrap";
import InfoPopup from "./InfoPopup";
import DiseasePopup from "./DiseasePopup";
import {useEffect, useState} from "react";

function AddDisease(){
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

  return(
    <div className="mb-4">
      <Button variant="primary" onClick={switchPopUp}>
        Erreger hinzufügen
      </Button>
      {showPopUp ? <DiseasePopup showPopUp={showPopUp} switchPopUp={switchPopUp}/> : null}
    </div>
  )
}

export default AddDisease;