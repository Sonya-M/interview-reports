import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CandidateList from "../components/CandidateList";
import ErrorDisplay from "../components/ErrorDisplay";
import SearchBar from "../components/SearchBar";
import { SESSION_EXPIRED } from "../shared/constants";
import styles from "./Candidates.module.css";
import LoaderRipple from "../components/UI/LoaderRipple";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    CandidateCommunicator.getAll()
      .then((data) => {
        setCandidates(data);
      })
      .catch((error) => {
        console.log(error);
        if (error.message === SESSION_EXPIRED) props.onSessionExpired();
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (error) {
    return <ErrorDisplay message={error} />;
  }
  if (loading) {
    return <LoaderRipple />;
  }

  if (candidates.length === 0) {
    return (
      <Fragment>
        <ErrorDisplay message="Sorry, failed to load data." />
      </Fragment>
    );
  }
  if (props.adminpage) {
    return (
      <Fragment>
        <CandidateList
          adminpage={true}
          candidates={candidates}
          searchText={searchText}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.mainContainer}>
        <CandidateList candidates={candidates} searchText={searchText} />
      </div>
    </Fragment>
  );
};

export default Candidates;
