import React from "react";
import style from "./Table.module.css";
import { TableInfo } from "./TableInfo";

export const Table = (props) => {
  const { reports } = props;

  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead className={style.th}>
          <tr>
            <th>Company</th>
            {props.admin ? <th>Candidate Name</th> : <React.Fragment />}
            <th>Interview Date</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <TableInfo reportInfo={report} key={report.id} admin={props.admin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
