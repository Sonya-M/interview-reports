import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCandidates, getCompanies, getReports } from "../services/services";

import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
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

  return props.loggedIn ? (
    <Fragment>
      <CandidateList candidates={candidates}/>
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default Candidates;
