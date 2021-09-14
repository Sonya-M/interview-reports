import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import ImageGuaranteed from "./UI/ImageGuaranteed.jsx";
import { PLACEHOLDER_IMG } from "../shared/constants";

import { div, Col } from "react-bootstrap";
import style from "./CandidateCard.module.css";

const Candidatediv = (props) => {
  const { candidate } = props;
  return (
    <Fragment>
      <Col xs={12} md={6} lg={4} >
        <Link to={"/candidates/" + candidate.id} className={style.linksStyle}>
          <div className={`m-1 h-100 ${style.candidateCard}`}>
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
              <div className="candidateName text-center">
                {candidate.name}
              </div>
              <div className="candidateEmail text-center">
                {candidate.email}
              </div>
            </div>
          </div>
        </Link>
      </Col>
    </Fragment>
  );
};

export default Candidatediv;
