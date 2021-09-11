import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CandidateCommunicator from "../services/CandidateCommunicator";
import ReportCommunicator from "../services/ReportCommunicator";

import ImageGuaranteed from "../components/UI/ImageGuaranteed";

import style from "./Report.module.css";
import { Table } from "../components/Table";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [reports, setReports] = useState([]);
  
  useEffect(() => {
    CandidateCommunicator.getById(id).then((data) => {
      console.log("selectedCandidate data: ", data);
      setSelectedCandidate(data);
    });
  }, [id]);
  useEffect(() => {
    ReportCommunicator.getAllForCandidate(id).then((data) => {
      console.log("reports for candidate: ", data);
      setReports(data);
    });
  }, [id]);

  if (!selectedCandidate) {
    return <p>Loading</p>; // TODO: add spinner
  }

  if (!selectedCandidate) {
    return <Fragment></Fragment>;
  }
  return (
    <Fragment>
      <div className={`container ${style.data}`} >
        <div className="row">
          <div className="col">
            <ImageGuaranteed
              preferredImg={selectedCandidate.avatar}
              placeholderImg="/Profile_avatar_placeholder_large.png"
            />
          </div>
          <div className="col">
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Name:</p>
              <span className={style.candidateData}>
                {selectedCandidate.name}
              </span>
            </div>
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Email:</p>
              <span className={style.candidateData}>
                {selectedCandidate.email}
              </span>
            </div>
          </div>
          <div className="col">
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Birthday:</p>
              <span className={style.candidateData}>
                {selectedCandidate.getBirthday()}
              </span>
            </div>
            <div className={style.cardInfo}>
              <p className={style.candidateInfo}>Education:</p>
              <div className={style.candidateData}>
                {selectedCandidate.education}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table reports={reports} />
    </Fragment>
  );
}
