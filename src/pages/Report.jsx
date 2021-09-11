import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import LoginRedirect from "../components/LoginRedirect";
// import {
//   getReports,
//   getSingleCandidate,
//   getReportsForCandidate,
// } from "../services/services";

import CandidateCommunicator from "../services/CandidateCommunicator";
import ReportCommunicator from "../services/ReportCommunicator";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  let location = useLocation();
  const { loggedIn } = props;

  const [reports, setReports] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCandidateReports, setSelectedCandidateReports] = useState([]);

  useEffect(() => {
    CandidateCommunicator.getById(id).then((data) => {
      console.log("selectedCandidate data: ", data);
      setSelectedCandidate(data);
    });
  }, [id]);

  useEffect(() => {
    ReportCommunicator.getAllForCandidate(id).then((data) => {
      console.log("reports for candidate: ", data);
      setSelectedCandidateReports(data);
    });
  }, [id]);

  if (!selectedCandidate || selectedCandidateReports.length === 0) {
    return <p>Loading</p>; // TODO: add spinner
  }

  return (
    <Fragment>
      <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>
      {/* placeholder - TODO: delete */}
      <ul>
        <li>{selectedCandidate.name}</li>
        <li>{selectedCandidateReports[0].note}</li>
      </ul>
    </Fragment>
  );
}
