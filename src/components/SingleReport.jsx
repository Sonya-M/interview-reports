import React, { Fragment } from "react";

import { Modal, Row, Col } from "react-bootstrap";
import { GrClose } from "react-bootstrap-icons";

const SingleReport = (props) => {
  return (
    <Fragment>
      <Modal as={Row} show={show} onHide={handleClose}>
        <Modal.Header as={Col} closeButton>
          <Modal.Title>Zula Feeney</Modal.Title>
        </Modal.Header>
        <Button as={Col} variant="secondary" onClick={handleClose}>
          {/* <GrClose size="1rem"/> */}
        </Button>
        <Modal.Body as={Row}>
          <Col md={3} sm={12}>
            <h6>Company</h6>
            <p>Google</p>
            <h6>Interview Date</h6>
            <p>20.12.2017</p>
            <h6>Phase</h6>
            <p>Tech</p>
            <h6>Status</h6>
            <p>passed</p>
          </Col>
          <Col md={9} sm={12}>
            <h6>Notes</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              aperiam tempora nostrum accusamus quas dignissimos consequatur
              velit perspiciatis iure magni molestiae quasi, adipisci veritatis
              doloremque! Impedit omnis accusantium sed ad!
            </p>
          </Col>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default SingleReport;
