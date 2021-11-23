import React from 'react';
import Popup from "./Popup";

class AddImmunization extends React.Component {
  constructor(props) {
    super(props);
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
                   uuid={this.props.uuid} pid={this.props.pid} perf={this.props.perf}/>
          : null}
      </div>
    );
  }
}

export default AddImmunization;


