import React, { Fragment, useEffect, useState } from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import SearchBar from "../components/SearchBar";
import { Table } from "../components/Table";

import ReportCommunicator from "../services/ReportCommunicator";

export default function AdminPage(props) {
  const [reports, setReports] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    ReportCommunicator.getAll()
      .then((data) => {
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

  const handleSearch = (searchInput) => {
    setSearchText(searchInput);
  };
  const deleteReport = (id) => {
    setReports(reports.filter((r) => r.id !== id));
    //TODO: delete on server!!!!!!!!!!!!!!!!!!
  };

  if (error) {
    return <ErrorDisplay message="Failed to load data" />;
  }
  if (loading) return <p>Loading...</p>;
  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
      <Table
        reports={reports}
        showCandidateName={true}
        filterText={searchText}
        showDeleteBtn={true}
        onDelete={deleteReport}
      />
    </Fragment>
  );
}
