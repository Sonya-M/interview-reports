import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import ImageGuaranteed from "./UI/ImageGuaranteed.jsx";
import { PLACEHOLDER_IMG } from "../shared/constants";

import { Card, Col } from "react-bootstrap";
import style from "./CandidateCard.module.css";
import AdminPage, {candidateName, candidateId} from "../pages/AdminPage" 
import CandidateCardAdmin from "./CandidateCardAdmin.jsx";

const CandidateCard = (props) => {
  const { candidate } = props;
  const handleCandidate = () => {
    candidateName.push(candidate.name)
    candidateId.push(candidate.id)
    console.log(candidateName)
    console.log(candidateId)
  }
  if (props.adminpage){
    return (
      <CandidateCardAdmin candidate={candidate}/>
      )
  }
  return (
    <Fragment>
      {console.log(props)}
      <Col xs={12} md={6} lg={4} className="mb-5">
        <Link to={"/candidates/" + candidate.id} className={style.linksStyle}>
          <Card className={`m-3 h-100 ${style.candidateCard}`}>
            {candidate.avatar ? (
              <ImageGuaranteed
                preferredImg={candidate.avatar}
                placeholderImg={PLACEHOLDER_IMG}
                preferredImgAlt={candidate.name}
                alt="avatar"
              />
            ) : (
              <img alt="No file available" src={PLACEHOLDER_IMG} />
            )}
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
  );
};

export default CandidateCard;
