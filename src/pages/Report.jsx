import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import { candidates } from "../data/candidates";
import { reports } from "../data/reports";
import { companies } from "../data/companies";
import style from './Report.module.css'
import { Table } from './Table';

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
  const selectedCandidateReport = reports
  const selectedCandidate = candidates.find(c => c.id === +id)
  const bDay = new Date (selectedCandidate.birthday)
  const formatedBirthday = `${bDay.getDate()}.${bDay.getMonth()+1}.${bDay.getFullYear()}`;
 
  

  if (!loggedIn)
    return (
      <LoginForm
        // onLogin={handleLogin}
        redirectPath={"/candidates/" + id} />
    );

  // return <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>;

  return loggedIn && (<Fragment>
    <h1>{`CANDIDATE REPORT (ID: ${id})`}</h1>
    <div className="container">
      <div className="row">
        <div className="col">
        <img src="https://picsum.photos/id/237/300/300"/>
        </div>
        <div className="col">
          <div className={style.cardInfo}>
            <p className={style.candidateInfo}>Name:</p>
            <span className={style.candidateData}>
            {selectedCandidate.name}
            </span>
          </div>
          <div className={style.cardInfo}>
          <p className={style.candidateInfo}>Email:</p>
          <span className={style.candidateData}>
            {selectedCandidate.email}
            </span>
          </div>

        </div>
        <div className="col">
        <div className={style.cardInfo}>
        <p className={style.candidateInfo}>Birthday:</p>
        <span className={style.candidateData}>
            {formatedBirthday}
            </span>
          </div>
          <div className={style.cardInfo}> 
          <p className={style.candidateInfo}>Education:</p>
          <div className={style.candidateData}>
            {selectedCandidate.education}
            </div>
          </div>

        </div>

      </div>
    </div>
    <Table/>
    
  </Fragment>);
}
