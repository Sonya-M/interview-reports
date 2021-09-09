import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { candidates } from "../data/candidates";
import { reports } from "../data/reports";
import { companies } from "../data/companies";

import style from './Report.module.css'
import { Table } from './Table';

export default function Report(props) {
  let { id } = useParams(); // candidate id
  // just testing data fetching, state will probably not be here
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      console.log("Fetched candidates", data);
      setCandidates(data);
    });
  }, []);

  useEffect(() => {
    getReports().then((data) => {
      console.log("Fetched reports", data);
      setReports(data);
    });
  }, []);

  useEffect(() => {
    getCompanies().then((data) => {
      console.log("Fetched companies: ", data);
      setCompanies(data);
    });
  }, []);
  
  const selectedCandidateReport = reports
  const selectedCandidate = candidates.find(c => c.id === +id)
  const bDay = new Date (selectedCandidate.birthday)
  const formatedBirthday = `${bDay.getDate()}.${bDay.getMonth()+1}.${bDay.getFullYear()}`;
 
  


  if (!loggedIn) {
    return <LoginRedirect redirectPath={location} />;
  }

  return (
    <Fragment>
      <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>
      <ul>
        <li>{selectedCandidateReport.candidateName}</li>
        <li>{selectedCandidateReport.note}</li>
      </ul>
    </Fragment>
  );
}
