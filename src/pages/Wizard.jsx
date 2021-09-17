import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReportCommunicator from "../services/ReportCommunicator";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CompanyCommunicator from "../services/CompanyCommunicator";

import { Row, Col } from "react-bootstrap";
import WizardSteps from "../components/WizardSteps";
import WizSelect from "../components/WizSelect";
import WizCandidateCard from "../components/WizCandidateCard";
import WizCompanyCard from "../components/WizCompanyCard";
import WizReportForm from "../components/WizReportForm";
import WizSelectedInfo from "../components/WizSelectedInfo";

import styles from "./Wizard.module.css";
import ErrorDisplay from "../components/ErrorDisplay";

export default function Wizard(props) {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [input, setInput] = useState({});
  const [error, setError] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate((prevSelectedCandidate) => {
      if (prevSelectedCandidate && prevSelectedCandidate.id === candidate.id) {
        return null; // deselect
      } else {
        return candidate;
      }
    });

    setInput((prevInput) => {
      if (prevInput.candidateId && prevInput.candidateId === candidate.id) {
        // reset input to init state
        const newInput = { ...prevInput };
        delete newInput.candidateName;
        delete newInput.candidateId;
        return {
          ...newInput,
        };
      } else {
        return {
          ...prevInput,
          candidateName: candidate.name,
          candidateId: candidate.id,
        };
      }
    });
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany((prevSelectedCompany) => {
      if (prevSelectedCompany && prevSelectedCompany.id === company.id) {
        return null; // deselect
      } else {
        return company;
      }
    });

    setInput((prevInput) => {
      if (prevInput.companyId && prevInput.companyId === company.id) {
        // reset input to init state
        const newInput = { ...prevInput };
        delete newInput.companyName;
        delete newInput.companyId;
        return {
          ...newInput,
        };
      } else
        return {
          ...prevInput,
          companyName: company.name,
          companyId: company.id,
        };
    });
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

  const handleNextBtnClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepClick = (step) => {
    // only react if going back:
    const nextStep = selectedCompany ? 2 : selectedCandidate ? 1 : 0;
    if (nextStep >= step) {
      setCurrentStep(step);
    }
  };

  const sharedSelectProps = {
    currentStep,
    onBackBtnClick: handleBackBtnClick,
    onNextBtnClick: handleNextBtnClick,
  };

  const nextStep = selectedCompany ? 2 : selectedCandidate ? 1 : 0;

  if (error) return <ErrorDisplay message={error} />;

  return (
    <Row className="mt-4  m-0">
      <Col sm={3} lg={2} className={styles.stepsDiv}>
        <WizardSteps
          currentStep={currentStep}
          nextStep={nextStep}
          onClick={handleStepClick}
        />
        <hr />
        <WizSelectedInfo
          candidateName={selectedCandidate ? selectedCandidate.name : ""}
          companyName={selectedCompany ? selectedCompany.name : ""}
        />
      </Col>
      <Col sm={8} className={styles.optionsDiv}>
        {currentStep === 0 && (
          <WizSelect
            onSelectItem={handleSelectCandidate}
            communicator={CandidateCommunicator}
            ItemCard={WizCandidateCard}
            selected={selectedCandidate}
            {...sharedSelectProps}
          />
        )}
        {currentStep === 1 && (
          <WizSelect
            onSelectItem={handleSelectCompany}
            communicator={CompanyCommunicator}
            ItemCard={WizCompanyCard}
            selected={selectedCompany}
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
