import React from "react";
import popup from "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popup">
        text
        <button onClick={this.props.switchPopUp}>
          Speichern
        </button>
        <button onClick={this.props.switchPopUp}>
          Abbrechen
        </button>
      </div>
    );
  }
}

export default Popup;