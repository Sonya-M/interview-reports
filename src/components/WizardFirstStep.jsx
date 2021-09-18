import React, { Fragment, useState } from "react";

import { PLACEHOLDER_IMG } from "../shared/constants";

import { ListGroup, Row, Col, Container } from "react-bootstrap";
import style from "./WizardFirstStep.module.css"

const WizardFirstStep = (props) => {
  const { candidates, data, updateData } = props;
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  
  console.log(data)

 

return (
  <Fragment>
    <Container fluid>
      <Row className="m-5">
        <Col md={4} className="m-2">
          <ListGroup variant="flush" >
            <ListGroup.Item  variant="dark">
              Select Candidate
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Select Company
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Fill in Report details
            </ListGroup.Item>
          </ListGroup>
          <p className="mt-5"><i>Selected candidate:</i> {selectedCandidate}</p>
        </Col>
        <Col md={6} className="m-2">
          <ListGroup>
            {candidates.map(c => (
            <ListGroup.Item 
              key={c.id} 
              onClick={() => [updateData("candidate", c), setSelectedCandidate(c.name)]}  
            >
                <img alt="No file available" src={PLACEHOLDER_IMG} style={{ width: '2rem' }} />
                <span className="m-2">{c.name}</span>
            </ListGroup.Item>
            ))}   
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

}

export default WizardFirstStep;