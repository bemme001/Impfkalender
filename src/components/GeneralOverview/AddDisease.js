import { Button } from "react-bootstrap";
import DiseasePopup from "./DiseasePopup";
import { useState } from "react";

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