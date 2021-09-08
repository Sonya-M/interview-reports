import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import { candidates } from "../data/candidates";
import { reports } from "../data/reports";
import { companies } from "../data/companies";

export default function Report(props) {
  let { id } = useParams(); // candidate id
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  //   if (isLoggedIn === "1") {
  //     setLoggedIn(true);
  //   }
  // }, [loggedIn]);

  // const handleLogin = (success) => {
  //   setLoggedIn(success);
  // };
  const loggedIn = true;

  const selectedCandidateReport = reports.find(r => r.candidateId === +id);

  console.log("ID: " + id + id);
  if (!loggedIn)
    return (
      <LoginForm
        // onLogin={handleLogin}
        redirectPath={"/candidates/" + id} />
    );

  // return <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>;

  return loggedIn && (<Fragment>
    <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>
    <ul>
      <li>{selectedCandidateReport.candidateName}</li>
      <li>{selectedCandidateReport.note}</li>
    </ul>

  </Fragment>);
}
