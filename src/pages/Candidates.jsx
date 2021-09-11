import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";

import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    CandidateCommunicator.getAll().then((data) => {
      console.log("Fetched candidates", data);
      setCandidates(data);
    });
  }, []);

  return props.loggedIn ? (
    <Fragment>
      <CandidateList candidates={candidates} />
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default Candidates;
