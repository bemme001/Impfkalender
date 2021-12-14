import { Button } from "react-bootstrap";
import DiseasePopup from "./DiseasePopup";
import { useState } from "react";

function AddDisease(){
  const [showPopUp, setShowPopUp] = useState(false);

  const switchPopUp = () => {
    setShowPopUp(show => !show);
  }

  return(
    <div>
      <Button
        type="button"
        variant="outline-secondary"
        onClick={switchPopUp}>
        Erreger hinzufügen
      </Button>
      {showPopUp ? <DiseasePopup showPopUp={showPopUp} switchPopUp={switchPopUp}/> : null}
    </div>
  )
}

export default AddDisease;