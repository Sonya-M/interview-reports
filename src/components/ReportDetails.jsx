import React from "react";

import { Row, Col} from "react-bootstrap";

const ReportDetails = (props) => {
  return (
    <Row>
    <Col md={4} sm={12}>
            <h6>Company</h6>
            <p>{}</p>
            <h6>Interview Date</h6>
            <p>{}</p>
            <h6>Phase</h6>
            <p>Tech</p>
            <h6>Status</h6>
            <p>passed</p>
          </Col>
          <Col md={8} sm={12}>
            <h6>Notes</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              aperiam tempora nostrum accusamus quas dignissimos consequatur
              velit perspiciatis iure magni molestiae quasi, adipisci veritatis
              doloremque! Impedit omnis accusantium sed ad!
            </p>
        </Col>
    </Row>
  )
}

export default ReportDetails;
