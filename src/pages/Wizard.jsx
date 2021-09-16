import React, { useState, useEffect } from "react";
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

export default function Wizard(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [input, setInput] = useState({});

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
    setInput((prevInput) => ({
      ...prevInput,
      interviewDate: formInput.date,
      phase: formInput.phase,
      status: formInput.status,
      note: formInput.note,
    }));
  };

  const handleBackBtnClick = () => {
    if (currentStep !== 0) setCurrentStep((prevStep) => prevStep - 1);
  };

  const sharedSelectProps = { currentStep, onBackBtnClick: handleBackBtnClick };

  return (
    <Row className="mt-4  m-0">
      <Col sm={3} className={styles.stepsDiv}>
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
          <WizReportForm onBackBtnClick={handleBackBtnClick} />
        )}
      </Col>
    </Row>
  );
}
