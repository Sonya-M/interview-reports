import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCandidates } from "../services/sevices";
import LoginForm from "./LoginForm";
import CandidateList from "../components/CandidateList";



const Candidates = (props) => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  //   if (isLoggedIn === "1") {
  //     setLoggedIn(true);
  //   }
  // }, [loggedIn]);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };
  
  const loggedIn = true;

  return loggedIn ? (
    <CandidateList />
  ) : (
      <LoginForm
        // onLogin={handleLogin}
        redirectPath="/candidates" />
  );
};

export default Candidates;
