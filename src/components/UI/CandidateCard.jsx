import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

import style from "./CandidateCard.module.css";

const CandidateCard = (props) => {
    const { candidate } = props;
    return (
        <Fragment>
            <Col xs={12} md={4}>
                <Link to={"/candidates/" + candidate.id} className={style.linksStyle}>
                    <Card className={` m-3 ${style.candidateCard}`}>
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
                </Link> 
            </Col> 
        </Fragment>
    )
}

export default CandidateCard;