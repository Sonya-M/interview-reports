import React from "react";

import { Row, Col } from "react-bootstrap";

const ReportDetails = (props) => {
  const { info } = props;
  return (
    <Row>
      <Col md={4} sm={12}>
        <h6>Company</h6>
        <p>{info.companyName}</p>
        <h6>Interview Date</h6>
        <p>{info.getInterviewDate()}</p>
        <h6>Phase</h6>
        <p>{info.phase}</p>
        <h6>Status</h6>
        <p>{info.status}</p>
      </Col>
      <Col md={8} sm={12}>
        <h6>Notes</h6>
        <p>{info.note}</p>
      </Col>
    </Row>
  );
};

export default ReportDetails;
