import React from "react";
// import popup from "./Popup.css";
import Immunization from './immunization'
//import postImmunization from '../../hooks/postImmunization'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: this.props.uuid,
      pid: this.props.pid,
      vaccine: '',
      status: '',
      date: '',
      site: '',
      route: '',
      dose: '',
      practitioner: '',
      note: '',
      reason: '',
      disease: '',
      immun: ''
    };
    this.immunization = new Immunization();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      case 'date':
        this.setState({date: event.target.value});
        break;
      case 'site':
        this.setState({site: event.target.value});
        break;
      case 'route':
        this.setState({route: event.target.value});
        break;
      case 'dose':
        this.setState({dose: event.target.value});
        break;
      case 'practitioner':
        this.setState({practitioner: event.target.value});
        break;
      case 'note':
        this.setState({note: event.target.value});
        break;
      case 'reason':
        this.setState({reason: event.target.value});
        break;
      case 'disease':
        this.setState({disease: event.target.value});
        break;
      case 'immun':
        this.setState({immun: event.target.value});
        break;
    }
    //console.log(this.state.vaccine);
  }

  handleSubmit(event) {
    //TODO Daten aus Formular in this.Immun füllen
    console.log(this.state.uuid);
    console.log(this.state.pid);
    console.log(this.state.vaccine);
    console.log(this.state.status);
    console.log(this.state.date);
    console.log(this.state.site);
    console.log(this.state.route);
    console.log(this.state.dose);
    console.log(this.state.practitioner);
    console.log(this.state.note);
    console.log(this.state.reason);
    console.log(this.state.disease);
    console.log(this.state.immun);
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
            <select name='vaccine' value={this.state.vaccine} onChange={this.handleChange}>
              <option value="" disabled selected hidden>Erreger</option>
              <option value="covid-19">Covid-19</option>
              <option value="influenza">Influenza</option>
            </select>
            <br/>
            <select name='status' value={this.state.status} onChange={this.handleChange}>
              <option value=""></option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
            <br/>
            <input type='date' name='date' value={this.state.date} onChange={this.handleChange}/>
            <br/>
            <select name='site' value={this.state.site} onChange={this.handleChange}>
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