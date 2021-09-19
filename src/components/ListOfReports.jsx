import React, { Fragment } from "react";

import ReportRow from "./ReportRow"
import { includesIgnoreCase } from "../utilities/helpers.js";

import { ListGroup } from "react-bootstrap";
import style from "./ListOfReports.module.css"

const ListOfReports = (props) => {
  const {reports, searchText, deleteReport} = props;
  

  let searchResult;
  if (searchText === "") {
    searchResult = reports;
  } else {
    searchResult = reports.filter((r) => {
      return includesIgnoreCase(r.candidateName, searchText) || includesIgnoreCase(r.companyName, searchText);
    });
  }
  
  
  return (
    <Fragment>
      <ListGroup className="m-2">
        {searchResult.map(r => (
          <ListGroup.Item key={r.id} className={style.reportsOverview}>
            <ReportRow report={r} deleteReport={deleteReport} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  )
}

export default ListOfReports;