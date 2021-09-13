import React, { Fragment } from "react";
import { includesIgnoreCase } from "../utilities/helpers";
import style from "./Table.module.css";
import { TableInfo } from "./TableInfo";

export const Table = (props) => {
  let { reports } = props;

  if (props.filterText) {
    reports = reports.filter((r) => {
      return (
        includesIgnoreCase(r.companyName, props.filterText) ||
        includesIgnoreCase(r.candidateName, props.filterText)
      );
    });
  }

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead className={style.th}>
          <tr>
            <th>Company</th>
            {props.showCandidateName ? (
              <th>Candidate Name</th>
            ) : (
              <React.Fragment />
            )}
            {props.showDeleteBtn ? <Fragment /> : <Fragment />}
            <th>Interview Date</th>
            <th>Status</th>
            {/* for the eye icon: */}
            <th></th>
            {props.showDeleteBtn ? <th></th> : <Fragment />}
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <TableInfo
              reportInfo={report}
              key={report.id}
              showCandidateName={props.showCandidateName}
              showDeleteBtn={props.showDeleteBtn}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
