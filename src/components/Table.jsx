import React, { Fragment } from "react";
import { includesIgnoreCase } from "../utilities/helpers";
import style from "./Table.module.css";
import { TableInfo } from "./TableInfo";

export const Table = (props) => {
  let { reports } = props;

  if (props.filterText) {
    reports = reports.filter((r) => {
      return includesIgnoreCase(
        r.companyName + " " + r.candidateName,
        props.filterText
      );
    });
  }

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  // const tableClass = props.admin ? style.table : style.adminTable;

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead className={style.th}>
          <tr>
            <th>Company</th>
            {props.admin ? <th>Candidate Name</th> : <React.Fragment />}
            <th className="text-center">Interview Date</th>
            <th className="text-center">Status</th>
            {/* for the eye icon: */}
            <th></th>
            {props.admin ? <th></th> : <Fragment />}
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <TableInfo
              reportInfo={report}
              key={report.id}
              onDelete={handleDelete}
              admin={props.admin}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};