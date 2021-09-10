import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import LoginRedirect from "../components/LoginRedirect";
import { getReports, getSingleCandidate } from "../services/services";

import style from "./Report.module.css";
import { Table } from "./Table";

export default function Report(props) {
  const { loggedIn } = props;
  let { id } = useParams();
  let location = useLocation();

  const [reports, setReports] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCandidateReports, setSelectedCandidateReports] = useState([]);

  useEffect(() => {
    getSingleCandidate(id)
      .then((data) => {
        console.log("selectedCandidate data: ", data);
        setSelectedCandidate(data);
      })
      .then(
        // fetching reports depends on first fetching single candidate data!!!
        getReports().then((data) => {
          console.log("Fetched reports", data);
          setReports(data);
          setSelectedCandidateReports(
            data.filter((r) => r.candidateId === +id)
          );
        })
      );
  }, [id]);

  if (!selectedCandidate || selectedCandidateReports.length === 0) {
    return <p>Loading</p>; // TODO: add spinner
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
      {/* placeholder - TODO: delete */}
      <ul>
        <li>{selectedCandidate.name}</li>
        <li>{selectedCandidateReports[0].note}</li>
      </ul>
    </Fragment>
  );
}
