import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCandidates } from "../services/services";

import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
  
  return props.loggedIn ? (
    <Fragment>
      <CandidateList />
    </Fragment>
  ) : (
      <Fragment/>
  );
};

export default Candidates;
