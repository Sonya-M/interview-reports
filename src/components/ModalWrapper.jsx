import React, { Fragment } from "react";

import { Modal, Row, Col, Button } from "react-bootstrap";


const ModalWrapper = (props) => {
  return (
    <Fragment>
      <Modal as={Row} show={props.show} onHide={props.onHide}>
        <Modal.Header as={Col} closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Button as={Col} variant="secondary" onClick={props.onClose}>
        </Button>
        <Modal.Body as={Row}>
          {props.content}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default ModalWrapper;
