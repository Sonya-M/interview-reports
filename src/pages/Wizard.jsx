import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import ReportCommunicator from "../services/ReportCommunicator";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CompanyCommunicator from "../services/CompanyCommunicator";

import { Row, Col, ProgressBar } from "react-bootstrap";
import WizardSteps from "../components/wiz/WizardSteps";
import WizSelect from "../components/wiz/WizSelect";
import WizCandidateCard from "../components/wiz/WizCandidateCard";
import WizCompanyCard from "../components/wiz/WizCompanyCard";
import WizReportForm from "../components/wiz/WizReportForm";
import WizSelectedInfo from "../components/wiz/WizSelectedInfo";

import { SESSION_EXPIRED } from "../shared/constants";

import styles from "./Wizard.module.css";
import ErrorDisplay from "../components/ErrorDisplay";

const defaultWizState = {
  selectedCandidate: null,
  selectedCompany: null,
  currentStep: 0, // currently active step, can already have input
  nextStep: 0, // next step where no input was provided by user
};

const wizReducer = (state, action) => {
  if (action.type === "SELECT_CANDIDATE") {
    if (
      state.selectedCandidate &&
      state.selectedCandidate.id === action.payload.id
    ) {
      return {
        ...state,
        selectedCandidate: null, // deselect candidate
        nextStep: 0,
      };
    } else {
      return {
        ...state,
        selectedCandidate: action.payload,
        nextStep: state.selectedCompany ? 2 : 1,
      };
    }
  }
  if (action.type === "SELECT_COMPANY") {
    if (
      state.selectedCompany &&
      state.selectedCompany.id === action.payload.id
    ) {
      return {
        ...state,
        selectedCompany: null,
        nextStep: 1,
      };
    } else {
      return {
        ...state,
        selectedCompany: action.payload,
        nextStep: state.selectedCandidate ? 2 : 1,
      };
    }
  }
  if (action.type === "BACK_BTN_CLICK") {
    if (state.currentStep !== 0)
      return { ...state, currentStep: state.currentStep - 1 };
  }
  if (action.type === "NEXT_BTN_CLICK") {
    return { ...state, currentStep: state.currentStep + 1 }; // no next btn in form
  }
  if (action.type === "STEP_CLICK") {
    // change currentStep only if going back or going 1 step forward
    if (state.nextStep >= action.step) {
      return { ...state, currentStep: action.step };
    }
  }
  return defaultWizState;
};

export default function Wizard(props) {
  const history = useHistory();
  const [error, setError] = useState("");
  const [wizState, dispatchWizAction] = useReducer(wizReducer, defaultWizState);

  const handleSelectCandidate = (candidate) => {
    dispatchWizAction({ type: "SELECT_CANDIDATE", payload: candidate });
  };

  const handleSelectCompany = (company) => {
    dispatchWizAction({ type: "SELECT_COMPANY", payload: company });
  };

  const handleBackBtnClick = () => {
    dispatchWizAction({ type: "BACK_BTN_CLICK" });
  };

  const handleNextBtnClick = () => {
    dispatchWizAction({ type: "NEXT_BTN_CLICK" });
  };

  const handleStepClick = (step) => {
    dispatchWizAction({ type: "STEP_CLICK", step: step });
  };

  const handleFormSubmit = (formInput) => {
    const { interviewDate, phase, status, note } = formInput;
    const selectedData = {
      candidateId: wizState.selectedCandidate.id,
      candidateName: wizState.selectedCandidate.name,
      companyId: wizState.selectedCompany.id,
      companyName: wizState.selectedCompany.name,
    };
    const reportData = { ...selectedData, interviewDate, phase, status, note };
    console.log("reportData: ", reportData);
    ReportCommunicator.save(reportData)
      .then((response) => console.log(response))
      .then(history.push("/admin"))
      .catch((error) => {
        if (error.message === SESSION_EXPIRED) props.onSessionExpired();
        setError(error.message);
      });
  };

  const sharedSelectProps = {
    currentStep: wizState.currentStep,
    onBackBtnClick: handleBackBtnClick,
    onNextBtnClick: handleNextBtnClick,
    onSessionExpired: props.onSessionExpired,
  };

  if (error) return <ErrorDisplay message={error} />;

  return (
    <Row className="mt-4  m-0">
      <Col sm={3} lg={2} className={styles.stepsDiv}>
        <WizardSteps
          currentStep={wizState.currentStep}
          nextStep={wizState.nextStep}
          onClick={handleStepClick}
        />
        <div className="text-center my-4" style={{width: "100%"}}>
          <ProgressBar max="3" now={wizState.currentStep + 1} variant="dark"/>
        </div>
        <WizSelectedInfo
          candidateName={
            wizState.selectedCandidate ? wizState.selectedCandidate.name : ""
          }
          companyName={
            wizState.selectedCompany ? wizState.selectedCompany.name : ""
          }
        />
      </Col>
      <Col sm={8} className={styles.optionsDiv}>
        {wizState.currentStep === 0 && (
          <WizSelect
            onSelectItem={handleSelectCandidate}
            communicator={CandidateCommunicator}
            ItemCard={WizCandidateCard}
            selected={wizState.selectedCandidate}
            {...sharedSelectProps}
          />
        )}
        {wizState.currentStep === 1 && (
          <WizSelect
            onSelectItem={handleSelectCompany}
            communicator={CompanyCommunicator}
            ItemCard={WizCompanyCard}
            selected={wizState.selectedCompany}
            {...sharedSelectProps}
          />
        )}
        {wizState.currentStep === 2 && (
          <WizReportForm
            onBackBtnClick={handleBackBtnClick}
            onSubmit={handleFormSubmit}
          />
        )}
      </Col>
    </Row>
  );
}
