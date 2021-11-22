import React from "react";
// import popup from "./Popup.css";

import Immunization from './immunization'
//import postImmunization from '../../hooks/postImmunization'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.Immun = new Immunization();
  }

  sendData() {
    //TODO Daten aus Formular in this.Immun füllen
    console.log("test");
    //PostImmunization(this.Immun.create)
  }

  render() {
    return (
      <div className="popup">
        text
        <button onClick={this.sendData}>
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