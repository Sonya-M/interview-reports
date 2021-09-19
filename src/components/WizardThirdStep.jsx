import React, { Fragment } from "react";
import { Link } from "react-router-dom"

import { ListGroup, Row, Col, Container, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import style from "./WizardThirdStep.module.css";

const WizardThirdStep = (props) => {
  const { data, updateData, createReport, prevPage} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    createReport(data);
  }
 
  
  
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
          <p className="mt-5"><i>Selected candidate:</i> {data.candidateName}</p>
          <p className="mt-5"><i>Selected company:</i> {data.companyName}</p>
        </Col>
        <Col md={6} className="m-2">
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Interview Date</InputGroup.Text>
                <FormControl
                  type="date"
                  aria-describedby="basic-addon1"
                  onChange={(e) => updateData("interviewDate", e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Phase</InputGroup.Text>
                <Form.Select onChange={(e) => updateData("phase", e.target.value)}>
                  <option>Select phase</option>
                  <option value="CV">CV</option>
                  <option value="HR">HR</option>
                  <option value="Technical">Technical</option>
                  <option value="Final">Final</option>
                </Form.Select>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Status</InputGroup.Text>
                <Form.Select onChange={(e) => updateData("status", e.target.value)}>
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
                onChange={(e) => updateData("note", e.target.value)}
              />
            </Form>
            <div className="d-flex justify-content-between">
              <Button onClick={prevPage} className="mt-2" variant="dark" >Back</Button>
              <Button type="submit" className="mt-2" onClick={handleSubmit} variant="dark" disabled={data.note?"":"true"} >
                <Link to="/reports" className={style.linksStyle}>Create Report</Link>
              </Button>
            </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

}

export default WizardThirdStep;