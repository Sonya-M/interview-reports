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
      
        <Link to={"/candidates/" + candidate.id} className={style.linksStyle}>
          <div className={`${style.candidateCard} `}>
            {candidate.avatar ? (
              <ImageGuaranteed
                preferredImg={candidate.avatar}
                placeholderImg={PLACEHOLDER_IMG}
                preferredImgAlt={candidate.name}
                alt="avatar"
                className={style.avatar}
              />
            ) : (
              <img alt="No file available" src={PLACEHOLDER_IMG} className={style.avatar} />
            )}
            <div className={style.candidateInfo}>
              <div className={style.name}>
                {candidate.name}
              </div>
              <div className={style.email}>
                {candidate.email}
              </div>
            </div>
          </div>
        </Link>
      
    </Fragment>
  );
};

export default CandidateCard;
