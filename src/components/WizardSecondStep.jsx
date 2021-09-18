import React, { Fragment, useState } from "react";

import { ListGroup, Row, Col, Container, Card } from "react-bootstrap";


const WizardSecondStep = (props) => {
  const { companies, data, updateData } = props;
  const [selectedCompany, setSelectedCompany] = useState(null);


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
          <p className="mt-5"><i>Selected candidate:</i> {data.candidate.name}</p>
          <p className="mt-5"><i>Selected company:</i> {selectedCompany}</p>
        </Col>
        <Col md={6} className="m-2">
            {companies.map(c => (
              <Card key={c.id} className="m-2">
                <Card.Body onClick={() => [updateData("company", c), setSelectedCompany(c.name)]} >
                  {c.name}
                </Card.Body>
            </Card>
            ))}   
        </Col>
      </Row>
    </Container>
  </Fragment>
)

}

export default WizardSecondStep;