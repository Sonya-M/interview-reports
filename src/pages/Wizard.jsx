import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Report from "./Report";
import ReportCommunicator from "../services/ReportCommunicator";
import { getDefaultNormalizer } from "@testing-library/react";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CompanyCommunicator from "../services/CompanyCommunicator";

import { Row, Col } from "react-bootstrap";
import WizardSteps from "../components/WizardSteps";
import WizSelect from "../components/WizSelect";
import WizCandidateCard from "../components/WizCandidateCard";
import WizCompanyCard from "../components/WizCompanyCard";
import WizReportForm from "../components/WizReportForm";

import styles from "./Wizard.module.css";
import ErrorDisplay from "../components/ErrorDisplay";

export default function Wizard(props) {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [input, setInput] = useState({});
  const [error, setError] = useState("");

  const handleSelectCandidate = (candidate) => {
    setInput((prevInput) => ({
      ...prevInput,
      candidateName: candidate.name,
      candidateId: candidate.id,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSelectCompany = (company) => {
    setInput((prevInput) => ({
      ...prevInput,
      companyName: company.name,
      companyId: company.id,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleFormSubmit = (formInput) => {
    const { interviewDate, phase, status, note } = formInput;
    const reportData = { ...input, interviewDate, phase, status, note };
    console.log("reportData: ", reportData);
    ReportCommunicator.save(reportData)
      .then((response) => console.log(response))
      .then(history.push("/admin"))
      .catch((error) => setError(error));
  };

  const handleBackBtnClick = () => {
    if (currentStep !== 0) setCurrentStep((prevStep) => prevStep - 1);
  };

  const sharedSelectProps = { currentStep, onBackBtnClick: handleBackBtnClick };

  if (error) return <ErrorDisplay message={error} />;

  return (
    <Row className="mt-4  m-0">
      <Col sm={3} lg={2} className={styles.stepsDiv}>
        <WizardSteps currentStep={currentStep} />
      </Col>
      <Col sm={8} className={styles.optionsDiv}>
        {currentStep === 0 && (
          <WizSelect
            onSelectItem={handleSelectCandidate}
            communicator={CandidateCommunicator}
            ItemCard={WizCandidateCard}
            {...sharedSelectProps}
          />
        )}
        {currentStep === 1 && (
          <WizSelect
            onSelectItem={handleSelectCompany}
            communicator={CompanyCommunicator}
            ItemCard={WizCompanyCard}
            {...sharedSelectProps}
          />
        )}
        {currentStep === 2 && (
          <WizReportForm
            onBackBtnClick={handleBackBtnClick}
            onSubmit={handleFormSubmit}
          />
        )}
      </Col>
    </Row>
  );
}
