import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CandidateList from "../components/CandidateList";
import ErrorDisplay from "../components/ErrorDisplay";
import SearchBar from "../components/SearchBar";
import styles from "./Candidates.module.css";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    CandidateCommunicator.getAll()
      .then((data) => {
        setCandidates(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (error) {
    //!!!! cannot problems appear when trying to display error,
    // since the error appears to be an empty object
    return <ErrorDisplay message={"error"} />;
  }
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
