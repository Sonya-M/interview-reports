import React, { Fragment } from "react";
import { candidates } from "../data/candidates";

import CandidateCard from "./UI/CandidateCard.jsx"

import { Row, Col } from "react-bootstrap";

export default function CandidateList(props) {
  return (
    <Fragment>
      <Row  className="g-4">
      <Col xs={6} md={4}>
        {candidates.map( c => (
      
            <CandidateCard 
              key={c.id}
              candidate={c}
             /> 
          
        ))}
  </Col>
</Row>
      
    </Fragment>
  );
}
