import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
// import { candidates as cant } from "../data/candidates";
// import { reports } from "../data/reports";
import { getSingleCandidate, getReports } from "../services/services";
import LoginRedirect from "../components/LoginRedirect";

import style from "./Report.module.css";
import { Table } from "./Table";

export default function Report(props) {
  const { loggedIn } = props;
  let location = useLocation();
  let { id } = useParams(); // candidate id

  const [reports, setReports] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCandidateReports, setSelectedCandidateReports] = useState([]);

  useEffect(() => {
    getSingleCandidate(id).then((data) => {
      console.log("selectedCandidate data: ", data);
      setSelectedCandidate(data);
    });
  }, [id]);

  useEffect(() => {
    getReports().then((data) => {
      console.log("Fetched reports", data);
      setReports(data);
      setSelectedCandidateReports(data.filter((r) => r.candidateId === +id));
    });
  }, [id]);

  if (!loggedIn) {
    return <LoginRedirect redirectPath={location} />;
  }

  if (!selectedCandidate) {
    return <Fragment></Fragment>;
  }
  return (
    <Fragment>
      <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className={style.avatar}
              src={selectedCandidate.avatar}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Profile_avatar_placeholder_large.png";
              }}
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
