import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function PopUp(props) {
  return (
    <Modal show={props.state} onHide={() => {props.setState(false)}}>
      <Modal.Header closeButton>
        <Modal.Title>Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.msg}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => props.setState(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
