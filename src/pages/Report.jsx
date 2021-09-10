import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import LoginRedirect from "../components/LoginRedirect";
import { getReports, getSingleCandidate } from "../services/services";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  let location = useLocation();
  const { loggedIn } = props;

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
