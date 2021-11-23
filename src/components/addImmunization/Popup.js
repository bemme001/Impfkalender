import React from "react";
import Immunization from './immunization'
import { postImmunization } from '../../hooks/postImmunization'

const Popup = (props) => {
  let immunization = new Immunization(props.uuid, props.pid, props.perf, "", "");

  const handleSubmit = (event) => {
    let json = immunization.create();
    postImmunization(json);
    
    props.switchPopUp();
  }

  const handleChange = (event) => {
    switch(event.target.name){
      case 'vaccine':
        immunization.vaccine = event.target.value;
        break;
      case 'status':
        immunization.status = event.target.value;
        break;
      case 'date':
        immunization.date = event.target.value;
        break;
      case 'site':
        immunization.site = event.target.value;
        break;
      case 'dose':
        immunization.dose = event.target.value;
        break;
      case 'note':
        immunization.note = event.target.value;
        break;
      case 'reason':
        immunization.reason = event.target.value;
        break;
      case 'disease':
        immunization.disease = event.target.value;
        break;
      case 'immun':
        immunization.immun = event.target.value;
        break;
      default:
        break;
    }
  }

    return (
      <div className="popup">
        <div className='popup_button'>
          <button onClick={props.switchPopUp}>
            Abbrechen
          </button>
        </div>
        <div className='popup_form'>
          <form onSubmit={handleSubmit}>
            <select name='disease' defaultValue={"Erreger"} onChange={handleChange} required>
              <option value="Erreger" disabled hidden>Erreger</option>
              { immunization.diseaseData.map( (x, y) => <option key={y}>{x}</option>) }
            </select>
            <br/>
            <input type='text' placeholder='Impfstoff' name='vaccine' onChange={handleChange} required/>
            <br/>
            <select name='status' defaultValue={"Status"} onChange={handleChange} required>
              <option value="Status" disabled hidden>Status</option>
              <option value="completed">Abgeschlossen</option>
              <option value="not-done">Unvollendet</option>
            </select>
            <br/>
            <select name='immun' defaultValue={"Immunisierungsgrad"} onChange={handleChange} required>
              <option value="Immunisierungsgrad" disabled hidden>Immunisierungsgrad</option>
              <option value="G1">Grundimmunisierung 1</option>
              <option value="G2">Grundimmunisierung 2</option>
              <option value="G3">Grundimmunisierung 3</option>
              <option value="A1">Auffrischimpfung 1</option>
              <option value="A2">Auffrischimpfung 2</option>
              <option value="A3">Auffrischimpfung 3</option>
              <option value="S">Standardimpfung</option>
            </select>
            <br/>
            <input type='date' placeholder={new Date()} name='date' onChange={handleChange} required/>
            <br/>
            <input type='text' placeholder='Impfstelle' name='site' onChange={handleChange} required/>
            <br/>
            <input type='text' placeholder='Dosis in ml' pattern="[0-9]+((.|,)[0-9]+)?" name='dose'
                   onChange={handleChange} required/>
            <br/>
            <input type='text' placeholder='Impfgrund' name='reason' onChange={handleChange}/>
            <br/>
            <input type='text' placeholder='Bemerkung' name='note' onChange={handleChange}/>
            <br/>
            <input type='submit' className='submit_button' value='Speichern' />
          </form>
        </div>
      </div>
    );
  }

export default Popup;