import React from "react";

import ReportRow from "./ReportRow"
import { includesIgnoreCase } from "../utilities/helpers.js";

import { ListGroup } from "react-bootstrap";


const ListOfReports = (props) => {
  const {reports, searchText} = props;
  

  let searchResult;
  if (searchText === "") {
    searchResult = reports;
  } else {
    searchResult = reports.filter((r) => {
      return includesIgnoreCase(r.candidateName, searchText) || includesIgnoreCase(r.companyName, searchText);
    });
  }
  
  
  return (
  <ListGroup className="m-2">
    {searchResult.map(r => (
    <ListGroup.Item key={r.id}>
       <ReportRow report={r} />
    </ListGroup.Item>
    ))}

  </ListGroup>
  )
}

export default ListOfReports;