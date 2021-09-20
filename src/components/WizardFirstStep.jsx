import React, { Fragment, useState } from "react";

import { ListGroup, Row, Col, Container, Button } from "react-bootstrap";
import { includesIgnoreCase } from "../utilities/helpers";
import style from "./WizardFirstStep.module.css"

const WizardFirstStep = (props) => {
  const { candidates, data, updateData, searchText, nextPage } = props;
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  
  let searchResult;
  if (searchText === "") {
    searchResult = candidates;
  } else {
    searchResult = candidates.filter((c) => {
      return includesIgnoreCase(c.name, searchText);
    });
  }
  
  candidates.map((c) => {
    if(c.name === selectedCandidate) {

    }
  })

return (
  <Fragment>
    <Container fluid>
      <Row className="m-5">
        <Col md={4} className="m-2">
          <ListGroup variant="flush" >
            <ListGroup.Item  variant="dark">
              Select Candidate
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Select Company
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Fill in Report details
            </ListGroup.Item>
          </ListGroup>
          <p className="mt-5"><i>Selected candidate:</i> {selectedCandidate}</p>
        </Col>
        <Col md={6} className="m-2">
          <ListGroup>
            {searchResult.map(c => (
            <ListGroup.Item 
              key={c.id} 
              onClick={() => [updateData("candidateId", c.id), updateData("candidateName", c.name), setSelectedCandidate(c.name)]}
              className={selectedCandidate === c.name? style.selected : ""}
            >
                <img alt="No file available" src={c.avatar} style={{ width: '2rem' }} />
                <span className="m-2">{c.name}</span>
            </ListGroup.Item>
            ))}   
          </ListGroup>
          <Button onClick={nextPage} className="mt-3" variant="dark" disabled={selectedCandidate? "" : true}  >Next</Button>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

}

export default WizardFirstStep;