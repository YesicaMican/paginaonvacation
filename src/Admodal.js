import React from "react";
import { Modal } from "react-bootstrap";

function AdModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Promoción Semanal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <a className="btn btn-success"
            href="https://wa.me/573153201677"
            target="_blank" rel="noreferrer"> Lo quiero! Tomalo aquí
        <img src="http://drive.google.com/uc?export=view&id=1TqcUfDfxzITRoD4MseganR9m27HYFM3_" alt="" className="img-fluid" />
       </a> 
      </Modal.Body>
    </Modal>
  );
}

export default AdModal;