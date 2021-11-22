import React from "react";

function Popup(props) {
  return (
    <div className="addPopUp">
      text
      <button onClick={props.switchPopUp}>
        x
      </button>
    </div>
  );
}

export default Popup;