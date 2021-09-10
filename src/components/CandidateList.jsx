import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import CandidateCard from "./UI/CandidateCard.jsx"

import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import style from "./LinkStyle.module.css";

export default function CandidateList(props) {
  const { candidates } = props;
  const candidatesCopy = {...candidates}
  

  const filterCandidates = (event) => {
    let filteredCandidates = [];
    if(event.target.value) {
      filteredCandidates = candidates.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {

    }
  }

  return (
    <Fragment>
      <Form as={Row} className="m-5">
        <Col sm={4} className="offset-sm-4" >
        <InputGroup className="mb-2">
          <InputGroup.Text><Search size="1rem"/></InputGroup.Text>
          <FormControl  type="text" />
      </InputGroup>
        </Col>
      </Form>
      <Row  className="g-4 m-5">
        {candidates.map( c => (
          <Col xs={12} md={4}>
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
