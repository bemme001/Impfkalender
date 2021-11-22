import React from "react";
// import popup from "./Popup.css";

import Immunization from './immunization'
//import postImmunization from '../../hooks/postImmunization'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Erreger'};
    this.Immun = new Immunization();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  sendData() {
    //TODO Daten aus Formular in this.Immun füllen
    console.log("test");
    //PostImmunization(this.Immun.create)
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }
  handleSubmit(event) {

  }

  render() {
    return (
      <div className="popup">
        <div className='popup_button'>
          <button onClick={this.props.switchPopUp}>
            Speichern
          </button>
          <button onClick={this.props.switchPopUp}>
            Abbrechen
          </button>
        </div>
        <div className='popup_form'>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="covid-19">Covid-19</option>
              <option value="influenza">Influenza</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;