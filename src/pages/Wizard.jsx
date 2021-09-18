import React, { Fragment, useState, useEffect } from "react";

import WizardFirstStep from "../components/WizardFirstStep";
import WizardSecondStep from "../components/WizardSecondStep";
import WizardThirdStep from "../components/WizardThirdStep";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CompanyCommunicator from "../services/CompanyCommunicator";

import { Button, ProgressBar } from "react-bootstrap";

const Wizard = () => {
  const [page, setPage] = useState(1);
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataFromWizard, setDataFromWizard] = useState({
    candidate: {},
    company: {},
    interviewDate: "",
    phase: "",
    status: "",
    note: ""
    
  })

  const updateWizardData = (type, newData) => {
    setDataFromWizard(dataFromWizard => {
      return {...dataFromWizard, [type]: newData}
    })
  }

  const getCandidates = () => {
    CandidateCommunicator.getAll()
      .then((data) => {
        console.log("candidates: ", data);
        setCandidates(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getCompanies = () => {
    CompanyCommunicator.getAll()
      .then((data) => {
        console.log("companies: ", data);
        setCompanies(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  // const deleteReport = (id) => {
  //   ReportCommunicator.delete(id)
  //     .then((response) => {
  //     console.log(response);
  //     getReports()})
  //     .catch((error) =>
  //     setError(error))
  // }


  useEffect(() => {
    getCandidates();
    getCompanies();
  }, []);

  const nextPage = () => {
    if(page === 3) return;
    setPage(page => page + 1)
    console.log(page)
  }

  const prevPage = () => {
    setPage(page => page - 1)
  }
   console.log(dataFromWizard)
  return (
    <Fragment>
      <div className="text-center m-3">
        <ProgressBar max="3" now={page} variant="dark"/>
      </div>
      {page === 1 && <WizardFirstStep candidates={candidates} data={dataFromWizard} updateData={updateWizardData}/>}
      {page === 2 && <WizardSecondStep companies={companies} data={dataFromWizard} updateData={updateWizardData}/>}
      {page === 3 && <WizardThirdStep data={dataFromWizard} updateData={updateWizardData}/>}
      {page >= 2 && <Button onClick={prevPage} className="m-2" variant="dark" >Back</Button>}
      {page < 3 && <Button  onClick={nextPage} className="m-2" variant="dark" >Next</Button>}
      {page === 3 && <Button type="submit" >Create Report</Button>}
    </Fragment>
  )
}

export default Wizard;