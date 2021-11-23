import React from "react";
// import popup from "./Popup.css";
import Immunization from './immunization'
//import postImmunization from '../../hooks/postImmunization'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: '',
      pid: '',
      vaccine: '',
      status: ''
    };
    this.Immun = new Immunization();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.sendData = this.sendData.bind(this);
  }

  handleChange(event) {
    //console.log(event.target.value);
    //switch(event.target)
    switch(event.target.name){
      case 'vaccine':
        this.setState({vaccine: event.target.value});
        break;
      case '':
    }
    //console.log(this.state.vaccine);
  }

  handleSubmit(event) {
    //TODO Daten aus Formular in this.Immun füllen
    console.log(this.state.vaccine);
    event.preventDefault();
    //let result = PostImmunization(this.Immun.create)
    //console.log(result);
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
            <select name='vaccine' value={this.state.value} onChange={this.handleChange}>
              <option value=""></option>
              <option value="covid-19">Covid-19</option>
              <option value="influenza">Influenza</option>
            </select>
            <input type='submit' value='Speichern'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;