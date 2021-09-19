import React, { Fragment, useEffect, useState } from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import SearchBar from "../components/SearchBar";
import { Table } from "../components/Table";

import ReportCommunicator from "../services/ReportCommunicator";

import { Button } from "react-bootstrap";
import styles from "./AdminPage.module.css";

export default function AdminPage(props) {
  const [reports, setReports] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // error as a string with the error msg

  const getReports = () => {
    ReportCommunicator.getAll()
      .then((data) => {
        setReports(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getReports();
  }, []);

  const handleSearch = (searchInput) => {
    setSearchText(searchInput);
  };
  const deleteReport = (id) => {
    // setReports(reports.filter((r) => r.id !== id));
    // TODO: Pitaj Nikolu da li ovo valja!!!
    ReportCommunicator.delete(id)
      .then((response) => {
        console.log(response);
        getReports();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (error) {
    return <ErrorDisplay message={error} />;
  }
  if (loading) return <p>Loading...</p>;
  return (
    <div className={styles.tableContainer}>
      <SearchBar onSearch={handleSearch} />
      <Table
        reports={reports}
        filterText={searchText}
        onDelete={deleteReport}
        admin={true}
      />
    </div>
  );
}
