import React, { Fragment, useState, useEffect } from "react";
import { getCandidates } from "../services/services";

import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      console.log("Fetched candidates", data);
      setCandidates(data);
    });
  }, []); // <---- !!!  otherwise fetched attempted on page load,
  // regardless of whether the user is logged in or not, and regardless of the
  // if condition before the call to fetch
  if(candidates.length === 0) {
    return <div>Loading ...</div>
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
