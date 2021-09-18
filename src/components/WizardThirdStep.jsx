import React, { Fragment, useState } from "react";

import { ListGroup, Row, Col, Container, Form, InputGroup, FormControl } from "react-bootstrap";


const WizardThirdStep = (props) => {
  const { data, updateData} = props;


 
  
  console.log(data)
return (
  <Fragment>
    <Container fluid>
      <Row className="m-5">
        <Col md={4} className="m-2">
          <ListGroup variant="flush" >
            <ListGroup.Item >
            Select Candidate
            </ListGroup.Item>
            <ListGroup.Item >
              Select Company
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Fill in Report details
            </ListGroup.Item>
          </ListGroup>
          <p className="mt-5"><i>Selected candidate:</i> {data.candidate.name}</p>
          <p className="mt-5"><i>Selected company:</i> {data.company.name}</p>
        </Col>
        <Col md={6} className="m-2">
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Interview Date</InputGroup.Text>
                <FormControl
                  type="date"
                  aria-describedby="basic-addon1"
                  onClick={(e) => updateData("reportDetails", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Phase</InputGroup.Text>
                <Form.Select onClick={(e) => updateData("phase", e.target.value)}>
                  <option>Select phase</option>
                  <option value="CV">CV</option>
                  <option value="HR">HR</option>
                  <option value="Technical">Technical</option>
                  <option value="Final">Final</option>
                </Form.Select>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Status</InputGroup.Text>
                <Form.Select>
                  <option>Select status</option>
                  <option value="Passed">Passed</option>
                  <option value="Declined">Declined</option>
                </Form.Select>
              </InputGroup>
              <Form.Label> Note:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a note here"
                style={{ height: '100px' }}
              />
            </Form>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

}

export default WizardThirdStep;