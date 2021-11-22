import React, { useState } from 'react';
import Popup from "./Popup";


function AddImmunization(){
  const [showPopUp, setShowPopUp] = useState(false)

  const switchPopUp = () => {
    setShowPopUp(currentState => !currentState);
  }

  return(
    <div className='pop_up'>
      <button className='addImmunizationButton' onClick={switchPopUp}>
        Impfung hinzufügen
      </button>
      {showPopUp ? <Popup showPopUp={showPopUp} switchPopUp={switchPopUp}/> : null}
      {/*<Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>*/}
    </div>
  );
}

export default AddImmunization;