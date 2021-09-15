import React from 'react';
import { Card, Col } from "react-bootstrap";
import style from "./CandidateCard.module.css";
import ImageGuaranteed from "./UI/ImageGuaranteed.jsx";
import { PLACEHOLDER_IMG } from "../shared/constants";
import AdminPage, {candidateName, candidateId} from "../pages/AdminPage" 


const CandidateCardAdmin = (props) => {
  const { candidate } = props;

    const handleCandidate = () => {
        candidateName.push(candidate.name)
        candidateId.push(candidate.id)
        console.log(candidateName)
        console.log(candidateId)
      }
    return (
        <Col xs={12} md={6} lg={4} className="mb-5" onClick={handleCandidate}>
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
    </Col>)
}
export default CandidateCardAdmin