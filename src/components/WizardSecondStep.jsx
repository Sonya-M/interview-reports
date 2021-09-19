import React, { Fragment, useState } from "react";

import { includesIgnoreCase } from "../utilities/helpers";

import { ListGroup, Row, Col, Container, Button, Card } from "react-bootstrap";


const WizardSecondStep = (props) => {
  const { companies, data, updateData, searchText, nextPage, prevPage } = props;
  const [selectedCompany, setSelectedCompany] = useState(null);

  let searchResult;
  if (searchText === "") {
    searchResult = companies;
  } else {
    searchResult = companies.filter((c) => {
      return includesIgnoreCase(c.name, searchText);
    });
  }


return (
  <Fragment>
    <Container fluid>
      <Row className="m-5">
        <Col md={4} className="m-2">
          <ListGroup variant="flush" >
            <ListGroup.Item >
            Select Candidate
            </ListGroup.Item>
            <ListGroup.Item variant="dark" >
              Select Company
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Fill in Report details
            </ListGroup.Item>
          </ListGroup>
          <p className="mt-5"><i>Selected candidate:</i> {data.candidateName}</p>
          <p className="mt-5"><i>Selected company:</i> {selectedCompany}</p>
        </Col>
        <Col md={6} className="m-2">
            {searchResult.map(c => (
              <Card key={c.id} className="m-2">
                <Card.Body onClick={() => [updateData("companyId", c.id), updateData("companyName", c.name), setSelectedCompany(c.name)]} >
                  {c.name}
                </Card.Body>
              </Card>
            ))}
            <div className="d-flex justify-content-between">
              <Button onClick={prevPage} className="m-2" variant="dark" >Back</Button>
              <Button  onClick={nextPage} className="m-2" variant="dark" disabled={selectedCompany?"":"true"} >Next</Button>   
            </div>  
        </Col>
      </Row>
    </Container>
  </Fragment>
)

}

export default WizardSecondStep;