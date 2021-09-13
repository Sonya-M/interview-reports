import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";
import Loader from "../components/UI/Loader";
import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    CandidateCommunicator.getAll().then((data) => {
      console.log("Fetched candidates", data);
      setCandidates(data);
    });
  }, []);
  if (candidates.length === 0) {
    return <Loader />;
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
