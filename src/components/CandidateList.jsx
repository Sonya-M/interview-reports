import React, { Fragment } from "react";
import { candidates } from "../data/candidates";

import CandidateCard from "./UI/CandidateCard.jsx"

import { Row, Col, Form } from "react-bootstrap";

export default function CandidateList(props) {
  return (
    <Fragment>
      <Form as={Row} className="m-5">
        <Col sm={4} className="offset-sm-4" >
          <Form.Control type="text" size="sm" />
        </Col>
      </Form>
      <Row  className="g-4">
        {candidates.map( c => (
          <Col xs={6} md={4}>
            <CandidateCard 
              key={c.id}
              candidate={c}
             /> 
           </Col>   
        ))}
      </Row>
    </Fragment>
  );
}
