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
    this.immunization = new Immunization();

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
      case 'status':
        this.setState({status: event.target.value});
        break;
    }
    //console.log(this.state.vaccine);
  }

  handleSubmit(event) {
    //TODO Daten aus Formular in this.Immun füllen
    console.log(this.state.vaccine);
    console.log(this.state.status);
    //event.preventDefault();
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
            <br/>
            <select name='status' value={this.state.value} onChange={this.handleChange}>
              <option value=""></option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
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