import React, { Fragment } from "react";
import { candidates } from "../data/candidates";

import CandidateCard from "./UI/CandidateCard.jsx"

import { Row, Col, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import style from "./LinkStyle.module.css"

export default function CandidateList(props) {
  return (
    <Fragment>
      <Form as={Row} className="m-5">
        <Col sm={4} className="offset-sm-4" >
          <Form.Control type="text" size="sm" />
        </Col>
      </Form>
      <Row  className="g-4 m-5">
        {candidates.map( c => (
          <Col xs={1} md={4}>
            <CandidateCard 
              key={c.id}
              candidate={c}
              className={style.linksStyle}
             /> 
           </Col>   
        ))}
      </Row>
    </Fragment>
  );
}
