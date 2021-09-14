import React, { useEffect } from "react";
import Report from "./Report";
import ReportCommunicator from "../services/ReportCommunicator";
import { getDefaultNormalizer } from "@testing-library/react";
import CandidateCommunicator from "../services/CandidateCommunicator";

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

  // const newReport = {
  //   candidateName: "Sonja Musicki",
  //   candidateId: 99087458,
  //   companyId: 11081915,
  //   companyName: "Krajcik Inc",
  //   interviewDate: "Tue Sept 14 2021 10:00:00 GMT+0100 (CET)",
  //   phase: "cv",
  //   status: "passed",
  //   note: "Huge potential",
  // };
  // console.log("Creating new report...");

  // useEffect(() => {
  //   console.log(
  //     "calling ReportCommunicator.save(newReport) and logging the response..."
  //   );
  //   ReportCommunicator.save(newReport).then((response) => {
  //     console.log("Response: ", response);
  //   });
  // });

  return <h1>Wizard goes here</h1>;
}
