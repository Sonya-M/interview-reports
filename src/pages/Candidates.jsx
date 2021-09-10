import React, { Fragment, useState, useEffect } from "react";
import { getCandidates } from "../services/services";

import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    if (props.loggedIn) {
      getCandidates().then((data) => {
        console.log("Fetched candidates", data);
        setCandidates(data);
      });
    }
  }, [props.loggedIn]); // <---- !!!  otherwise fetched attempted on page load,
  // regardless of whether the user is logged in or not, and regardless of the
  // if condition before the call to fetch

  return props.loggedIn ? (
    <Fragment>
      <CandidateList candidates={candidates} />
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default Candidates;
