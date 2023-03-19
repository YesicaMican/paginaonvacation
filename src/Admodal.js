import React from "react";
import { Modal } from "react-bootstrap";

function AdModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Anuncio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="./promo.jpg" alt="Imagen del anuncio" />
        <p>Aquí puedes agregar el texto del anuncio.</p>
      </Modal.Body>
    </Modal>
  );
}

export default AdModal;