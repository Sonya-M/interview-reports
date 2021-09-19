import React, { Fragment, useState, useEffect } from "react";

import WizardFirstStep from "../components/WizardFirstStep";
import WizardSecondStep from "../components/WizardSecondStep";
import WizardThirdStep from "../components/WizardThirdStep";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CompanyCommunicator from "../services/CompanyCommunicator";
import ReportCommunicator from "../services/ReportCommunicator";
import SearchBar from "../components/SearchBar";

import { ProgressBar } from "react-bootstrap";

const Wizard = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataFromWizard, setDataFromWizard] = useState({
    candidateId: null,
    candidateName: "",
    companyId: null,
    companyName: "",
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

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };


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
  const createReport = (data) => {
    console.log(data)
    ReportCommunicator.save(data)
      .then((response) => {
      console.log(response);
      })
      .catch((error) =>
      setError(error))
  }


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
   
  return (
    <Fragment>
      <SearchBar  onSearch={handleSearch}/>
      {page === 1 && <WizardFirstStep candidates={candidates} data={dataFromWizard} updateData={updateWizardData} searchText={searchText} nextPage={nextPage}/>}
      {page === 2 && <WizardSecondStep companies={companies} data={dataFromWizard} updateData={updateWizardData} searchText={searchText} nextPage={nextPage} prevPage={prevPage}/>}
      {page === 3 && <WizardThirdStep data={dataFromWizard} updateData={updateWizardData} createReport={createReport} prevPage={prevPage}/>}
      <div className="text-center m-3">
        <ProgressBar max="3" now={page} variant="dark"/>
      </div>
    
    </Fragment>
  )
}

export default Wizard;