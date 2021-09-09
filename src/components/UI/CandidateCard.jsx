import React, { Fragment } from "react";

import { Card } from "react-bootstrap";

import "./CandidateCard.css"

const CandidateCard = (props) => {
    const { candidate } = props;
    return (
        <Fragment>
            <Card className="candidateCard m-2">
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
        </Fragment>
    )
}

export default CandidateCard;