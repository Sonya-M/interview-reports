import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ReportCommunicator from "../services/ReportCommunicator";
import ErrorDisplay from "../components/ErrorDisplay"; 
import ListOfReports from "../components/ListOfReports";
import SearchBar from "../components/SearchBar";

import { Button } from "react-bootstrap";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);


  const getReports = () => {
    ReportCommunicator.getAll()
      .then((data) => {
        console.log("reports: ", data);
        setReports(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const deleteReport = (id) => {
    ReportCommunicator.delete(id)
      .then((response) => {
      console.log(response);
      getReports()})
      .catch((error) =>
      setError(error))
  }


  useEffect(() => {
    getReports();
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (error) {
    return <ErrorDisplay message="Sorry, failed to load data" />;
  }
  
  return (
    <Fragment>
      <Link to="/wizard">
        <Button variant="dark m-2" size="lg"> 
          Add new report 
        </Button>
      </Link>
      <SearchBar onSearch={handleSearch}/>
      <ListOfReports reports={reports} searchText={searchText} deleteReport={deleteReport}/>
    </Fragment>
  )
}

export default Reports;