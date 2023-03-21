import React from "react";
import { Modal } from "react-bootstrap";

function AdModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="B2">Promoción de hoy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className= 'img-fluid' src="http://drive.google.com/uc?export=view&id=1sfkNN8gOhoxqAyEmmY8IhFh-37IHWun0" alt=""  />
       <br/> 
       <br/> 
       
       <a target="_blank" rel="noreferrer" className="btn btn-success"
        href="https://wa.me/573153201677" 
       >Lo quiero! Escribe por WhatsApp</a>
      </Modal.Body>
    </Modal>
  );
}

export default AdModal;