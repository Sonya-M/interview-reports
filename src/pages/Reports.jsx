import React, { Fragment, useState, useEffect } from "react";
import ReportCommunicator from "../services/ReportCommunicator";
import ErrorDisplay from "../components/ErrorDisplay"; 
import ListOfReports from "../components/ListOfReports";
import SearchBar from "../components/SearchBar";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
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
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (error) {
    return <ErrorDisplay message="Sorry, failed to load data" />;
  }
  
  return (
    <Fragment>
      <SearchBar onSearch={handleSearch}/>
      <ListOfReports reports={reports}/>
    </Fragment>
  )
}

export default Reports;