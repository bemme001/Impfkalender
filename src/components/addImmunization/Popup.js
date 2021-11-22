import React from "react";
import popup from "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Erreger'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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