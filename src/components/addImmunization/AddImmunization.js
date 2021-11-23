import React from 'react';
import Popup from "./Popup";
// import popup from "./Popup.css";

class AddImmunization extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopUp: false
    };

    this.switchPopUp = this.switchPopUp.bind(this);
  }

  switchPopUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  render() {
    return(
      <div className='add_immunization'>
        <button className='add_immunization_button' onClick={this.switchPopUp}>
          Impfung hinzufügen
        </button>
        {this.state.showPopUp
          ? <Popup showPopUp={this.state.showPopUp} switchPopUp={this.switchPopUp}
                   uuid={this.props.uuid} pid={this.props.pid}/>
          : null}
        {/*<Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>*/}
      </div>
    );
  }
}

export default AddImmunization;


