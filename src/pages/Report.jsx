import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { candidates as cant } from "../data/candidates";
import { reports } from "../data/reports";
import { companies } from "../data/companies";
import { getCandidates, getCompanies, getReports } from "../services/services";
import LoginRedirect from "../components/LoginRedirect";

import style from "./Report.module.css";
import { Table } from "../components/Table";

export default function Report(props) {
  const { loggedIn } = props;
  let location = useLocation();
  let { id } = useParams(); // candidate id
  // just testing data fetching, state will probably not be here
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   getCandidates().then((data) => {
  //     console.log("Fetched candidates", data);
  //     setCandidates(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   getReports().then((data) => {
  //     console.log("Fetched reports", data);
  //     setReports(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   getCompanies().then((data) => {
  //     console.log("Fetched companies: ", data);
  //     setCompanies(data);
  //   });
  // }, []);

  const selectedCandidateReports = reports;
  const selectedCandidate = cant.find((c) => c.id === +id);
  const bDay = new Date(selectedCandidate.birthday);
  const formatedBirthday = `${bDay.getDate()}.${
    bDay.getMonth() + 1
  }.${bDay.getFullYear()}`;

  if (!selectedCandidate) {
    return <p>Loading</p>; // TODO: add spinner
  }

  if (!selectedCandidate) {
    return <Fragment></Fragment>;
  }
  return (
    <Fragment>
      <div className={`container ${style.data}`}>
        <div className="row">
          <div className="col">
            <img src={selectedCandidate.avatar} />
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
              <span className={style.candidateData}>{formatedBirthday}</span>
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
      <Table />
    </Fragment>
  );
}
