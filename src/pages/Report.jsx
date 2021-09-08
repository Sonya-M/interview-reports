import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { candidates } from "../data/candidates";
import { reports } from "../data/reports";
import { companies } from "../data/companies";
import LoginRedirect from "../components/LoginRedirect";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  
  const {loggedIn} = props;

  const selectedCandidateReport = reports.find(r => r.candidateId === +id);

  if (!loggedIn){return (<LoginRedirect />)};

  return (
    <Fragment>
    <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>
    <ul>
      <li>{selectedCandidateReport.candidateName}</li>
      <li>{selectedCandidateReport.note}</li>
    </ul>

  </Fragment>);
}
