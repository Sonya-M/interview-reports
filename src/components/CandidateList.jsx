import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import CandidateCard from "./UI/CandidateCard.jsx"

import { Row, Col } from "react-bootstrap";
import style from "./LinkStyle.module.css";

export default function CandidateList(props) {
  const { candidates } = props;

  return (
    <Fragment>
      <Row xs={1} md={3} className="m-5">
        {candidates.map( c => (
          <Col className="mb-5">
            <Link to={"/candidates/" + c.id } className={style.linksStyle}>
              <CandidateCard 
                key={c.id}
                candidate={c}
              /> 
            </Link>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
