import React from "react";
// import popup from "./Popup.css";
import Immunization from './immunization'
import { postImmunization } from '../../hooks/postImmunization'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.immunization = new Immunization(props.uuid, props.pid, props.perf);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
/*     this.immunization.vaccine = '58';
    this.immunization.status = 'completed';
    this.immunization.site = 'LA';
    this.immunization.route = 'GINGINJ';
    this.immunization.dose = 0.5;
    this.immunization.note = 'test';
    this.immunization.reason = '429060002';
    this.immunization.disease = 'Rotaviren';
    this.immunization.immun = 'G2'; */
  }

  handleChange(event) {
    switch(event.target.name){
      case 'vaccine':
        this.immunization.vaccine = event.target.value;
        break;
      case 'status':
        this.immunization.status = event.target.value;
        break;
      case 'date':
        this.immunization.date = event.target.value;
        break;
      case 'site':
        this.immunization.site = event.target.value;
        break;
      case 'route':
        this.immunization.route = event.target.value;
        break;
      case 'dose':
        this.immunization.dose = event.target.value;
        break;
      case 'note':
        this.immunization.note = event.target.value;
        break;
      case 'reason':
        this.immunization.reason = event.target.value;
        break;
      case 'disease':
        this.immunization.disease = event.target.value;
        break;
      case 'immun':
        this.immunization.immun = event.target.value;
        break;
      default:
        break;
    }
    //console.log(this.state.vaccine);
  }

  handleSubmit(event) {
    //TODO Daten aus Formular in this.Immun füllen
    this.immunization.toString()
    //event.preventDefault();
    let json = this.immunization.create()
    let result = postImmunization(json)
    //console.log(result);
    console.log(json);
    console.log(result);

    this.props.switchPopUp();
  }

  render() {
    return (
      <div className="popup">
        <div className='popup_button'>
          {/*<button onClick={this.props.switchPopUp}>
            Speichern
          </button>*/}
          <button onClick={this.props.switchPopUp}>
            Abbrechen
          </button>
        </div>
        <div className='popup_form'>
          <form onSubmit={this.handleSubmit}>
            <select name='disease' defaultValue={"Erreger"} onChange={this.handleChange}>
              <option value="Erreger" disabled hidden>Erreger</option>
              { this.immunization.diseaseData.map( (x, y) => <option key={y}>{x}</option>) }
            </select>
            <br/>
            <select name='status' defaultValue={"Status"} onChange={this.handleChange}>
              <option value="Status" disabled hidden>Status</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
            <br/>
            <input type='date' name='date' onChange={this.handleChange}/>
            <br/>
            <select name='site' onChange={this.handleChange}>
              <option value=""></option>
              <option value="LA">Linker Arm</option>
              <option value="RA">Rechter Arm</option>
            </select>
            <br/>
            <input type='submit' className='submit_button' value='Speichern'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;