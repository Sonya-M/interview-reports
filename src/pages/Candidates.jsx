import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CandidateList from "../components/CandidateList";
import ErrorDisplay from "../components/ErrorDisplay";
import SearchBar from "../components/SearchBar";
import StepCandidateList from "../components/StepCandidateList"
import styles from "./Candidates.module.css"
import BBTLogo from "../components/UI/BBTLogo";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CandidateCommunicator.getAll()
      .then((data) => {
        setCandidates(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (candidates.length === 0) {
    return (
      <Fragment>
        <ErrorDisplay message="Sorry, failed to load data." />
      </Fragment>
    );
  }
  if (props.adminpage) {
    return (<Fragment>
      <CandidateList adminpage={true} candidates={candidates} searchText={searchText} />
    </Fragment>)
  }

  return  (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.mainContainer}>
      <CandidateList candidates={candidates} searchText={searchText} />
      </div>
    </Fragment>
  ) 
};

export default Candidates;
