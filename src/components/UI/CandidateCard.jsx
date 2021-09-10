import React, { Fragment } from "react";

import { Card, Col } from "react-bootstrap";

import "./CandidateCard.css"

const CandidateCard = (props) => {
    const { candidate } = props;
    return (
        <Fragment>
            <Col xs={12} md={4}>
            <Card className="candidateCard m-3">
                <Card.Img
                    className="cardImg"
                    variant="top"
                    src={candidate.avatar}
                    alt="no image"
                />
                <Card.Body>
                    <Card.Title className="candidateName text-center">
                        {candidate.name}
                    </Card.Title>
                    <Card.Text className="candidateEmail text-center">
                        {candidate.email}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col> 
        </Fragment>
    )
}

export default CandidateCard;