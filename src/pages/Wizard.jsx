import React, { useEffect } from "react";
import Report from "./Report";
import ReportCommunicator from "../services/ReportCommunicator";
import { getDefaultNormalizer } from "@testing-library/react";
import CandidateCommunicator from "../services/CandidateCommunicator";
import { candidateName,candidateId, companyInfoName, companyInfoId, date, phase, status, notes  } from "./AdminPage";

export default function Wizard(props) {
  // TODO: delete all this tester code:

  // const newCandidate = {
  //   name: "Sonja Musicki",
  //   birthday: new Date("May 11, 1979"),
  //   email: "whatsittoyou@gmail.com",
  //   education: "BIT",
  //   avatar: "",
  // };
  // useEffect(() => {
  //   CandidateCommunicator.save(newCandidate).then((response) => {
  //     console.log("Response from creating new candidate: ", response);
  //   });
  // });
  

  const newReport = {
    candidateName: candidateName[candidateName.length-1],
    candidateId: candidateId[candidateId.length-1],
    companyId: companyInfoId[companyInfoId.length-1],
    companyName: companyInfoName[companyInfoName.length-1],
    interviewDate: date,
    phase: phase,
    status: status,
    note: notes,
  };
  console.log("Creating new report...");

  useEffect(() => {
    console.log(
      "calling ReportCommunicator.save(newReport) and logging the response..."
    );
    ReportCommunicator.save(newReport).then((response) => {
      console.log("Response: ", response);
    });
  });

  return <h1>Wizard goes here</h1>;
}
