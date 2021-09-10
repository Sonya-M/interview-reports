import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import CandidateCard from "./UI/CandidateCard.jsx"

import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import style from "./LinkStyle.module.css";
import Candidates from "../pages/Candidates.jsx";

export default function CandidateList(props) {
  const { candidates } = props;
  // const[searchResult, setSearchResult] = useState([]);
  
  // const filterCandidates = (e) => {
  //   let filtered =[];
  //   if(e.target.value) {
  //     filtered = candidates.filter(item => item.name.toLowerCase().includes(e.target.value).toLowerCase());
  //     setSearchResult(filtered);
  //   }
  //   else {
  //     setSearchResult(candidates);
  //   }
  // }

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
            <CandidateCard 
              key={c.id}
              candidate={c}
              className={style.linksStyle}
             />  
        ))}
      </Row>
    </Fragment>
  );
}
