import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";

import CandidateList from "../components/CandidateList";
import ErrorDisplay from "./ErrorDisplay";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CandidateCommunicator.getAll()
      .then((data) => {
        setCandidates(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (candidates.length === 0) {
    return (
      <Fragment>
        <ErrorDisplay message="Sorry, failed to fetch data." />
      </Fragment>
    );
  }

  return props.loggedIn ? (
    <Fragment>
      <CandidateList candidates={candidates} />
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default Candidates;
