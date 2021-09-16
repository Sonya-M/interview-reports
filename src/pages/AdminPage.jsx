import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Table } from "../components/Table";
import ReportCommunicator from "../services/ReportCommunicator";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CompanyCommunicator from "../services/CompanyCommunicator"
import CandidateList from "../components/CandidateList";
import SearchBar from "../components/SearchBar";
import Candidates from "./Candidates";
import Company from "./Company";
import adminStyle from "./AdminPage.module.css"
import Steps from "../components/Steps";


export let candidateName = [];
export let candidateId = [];
export let companyInfoName = [];
export let companyInfoId = [];
export let date = "";
export let phase = "";
export let status = "";
export let notes = "";

export default function AdminPage(props) {
  let [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [company, setCompany] = useState([]);
  const [candidates, setCandidates] = useState([]);
  // const [searchText, setSearchText] = useState("");
  
  
  
  // const handleSearch = (filterText) => {
  //   setSearchText(filterText);
  // };

  const nextStepHandler = () => {
    
    setStep(step+1);

    console.log(step);
  };
  const prevStepHandler = () => {
    setStep(step-1);
  };
  const candidateStepHandler = () => {
    if (candidateName.length === 0){
      return (alert("Select candidate"))

    }
    else {
      nextStepHandler()
    }
  }
  const companyHandler = () => {
    if (companyInfoName.length === 0){
      return (alert("select company"))
    }
    else {
      nextStepHandler()
    }

  }
  const dateHandler = (event) =>{
    date = event.target.value
    console.log(date)
  }
  const phaseHandler = (event) =>{
    phase = event.target.value
    console.log(phase)
  }
  const statusHandler = (event) =>{
    status = event.target.value
    console.log(status)
  }
  const notesHandler = (event) => {
    notes = event.target.value
    console.log(notes)
  }
  useEffect(() => {
    ReportCommunicator.getAll().then((data) => {
      setReports(data);
    });
  }, []);

  // useEffect(() => {
  //   CandidateCommunicator.getAll()
  //     .then((data) => {
  //       setCandidates(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // if (step === 0) {
  //   return (
  //     <Fragment>
  //       <Table reports={reports} admin={true} />
  //       <button onClick={nextStepHandler}>Create report</button>
  //       {console.log(`reports: ${reports}`)}
  //       {console.log(candidates)}
  //     </Fragment>
  //   );
  // }
  if (step === 1) {
    return (
      <div className={adminStyle.container}>
        <Steps step={step}/>
        <Candidates adminpage={true}/>
        <button onClick={candidateStepHandler}>Next</button>
        <button onClick={prevStepHandler}>Back</button>
      </div>
    );
  }
  if (step === 2){
    return (
    <div className={adminStyle.container}>
        <Steps step={step}/>

      {console.log(candidateName)}
      <div>
    <Company company={company}/>
    <button onClick={prevStepHandler}>Back</button>
    <button onClick={companyHandler}>Next</button>
    </div>
    </div>)
  }
  if (step === 3){
    return (
      <div className={adminStyle.container}>
        <Steps />
        <div>
        <label htmlFor="date">Interview date</label>
        <input type="date" id="date" onChange={dateHandler}></input>
        <label htmlFor="phase">Phase</label>
        <select id="phase" onChange={phaseHandler}>
          <option>Hr</option>
          <option>Cv</option>
        </select>
        <label htmlFor="status">Status</label>
        <select id="status" onChange={statusHandler}>
          <option>passed</option>
          <option>declined</option>
        </select>
        <br/>
        <label htmlFor="notes">Notes</label>
        <br/>
        <textarea id="notes" onChange={notesHandler}></textarea>
        </div>
      </div>
    )
  }
}
