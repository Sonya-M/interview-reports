import React, { useState } from "react";
import { formatDateForHtmlInput } from "../utilities/helpers";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";

export default function WizReportForm(props) {
  const [formInput, setFormInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value:", value);

    setFormInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log("handle submit: input: ", formInput);
    e.preventDefault();
    props.onSubmit(formInput);
  };

  const maxDate = formatDateForHtmlInput(new Date());
  console.log("Returned date format: ", maxDate);
  return (
    <FormGroup className="m-3">
      <Row className="g-2">
        <Col lg>
          <Form.Control
            name="interviewDate"
            type="date"
            max={maxDate}
            value={formInput.date}
            onChange={handleChange}
          />
        </Col>
        <Col md>
          <Form.Select
            name="phase"
            value={formInput.phase}
            onChange={handleChange}
          >
            <option value="">Select phase</option>
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Tech">Tech</option>
            <option value="Final">Final</option>
          </Form.Select>
        </Col>
        <Col md>
          <Form.Select
            name="status"
            value={formInput.status}
            onChange={handleChange}
          >
            <option value="">Select status</option>
            <option value="Passed">Passed</option>
            <option value="Declined">Declined</option>
          </Form.Select>
        </Col>

        <Col sm={12}>
          <Form.Control
            as="textarea"
            placeholder="Notes"
            name="note"
            value={formInput.note}
            onChange={handleChange}
            style={{ height: "150px" }}
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <Button className="m-3" onClick={props.onBackBtnClick}>
          Back
        </Button>
        <Button className="m-3" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </FormGroup>
  );
}
