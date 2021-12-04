import {Button, Modal} from "react-bootstrap";
/*import {GlobalContext} from "../context/GlobalState";
import React, {useRef, useState, useContext} from 'react'*/

const InfoPopup = (props) => {

  /*const {patientObject, immunizationList} = useContext(GlobalContext);

  function test(){
    console.log(patientObject);
    console.log(immunizationList);
  }*/

  return (
    <div className='InfoPopup'>
      <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Infos zur Impfung: {props.infos.pathogen}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p>{props.infos.pathogen}</p>
          <p>{props.infos.vaccine}</p>
          <p>{props.infos.status}</p>
          <p>{props.infos.immun}</p>
          <p>{props.infos.date}</p>
          <p>{props.infos.site}</p>
          <p>{props.infos.quantity}</p>
          <p>{props.infos.reason}</p>
          <p>{props.infos.note}</p>

          {/*<p>{test()}</p>*/}

          <Button onClick={props.switchPopUp}>Schließen</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InfoPopup;