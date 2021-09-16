import React from "react";
import { formatDateForHtmlInput } from "../utilities/helpers";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";

export default function WizReportForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const maxDate = formatDateForHtmlInput(new Date());
  console.log("Returned date format: ", maxDate);
  return (
    <FormGroup className="m-3" onSubmit={handleSubmit}>
      <Row className="g-2">
        <Col lg>
          <Form.Control className="m-3" type="date" max={maxDate} />
        </Col>
        <Col md>
          <Form.Select className="m-3">
            <option value="">Select phase</option>
            <option>CV</option>
            <option>HR</option>
            <option>Tech</option>
            <option>Final</option>
          </Form.Select>
        </Col>
        <Col md>
          <Form.Select className="m-3">
            <option value="">Select status</option>
            <option>CV</option>
            <option>HR</option>
          </Form.Select>
        </Col>
      </Row>
      <Form.Control
        className="m-3"
        as="textarea"
        placeholder="Notes"
        style={{ height: "150px" }}
      />
      <div className="d-flex justify-content-between">
        <Button className="m-3" onClick={props.onBackBtnClick}>
          Back
        </Button>
        <Button className="m-3" type="submit">
          Submit
        </Button>
      </div>
    </FormGroup>
  );
}
