import React from "react";
import style from "./Table.module.css";
import { TableInfo } from "./TableInfo";
import { Link } from "react-router-dom";


export const Table = (props) => {
  const { reports, admin } = props;

  return (
    <div className={style.tableContainer}>
      <table className={admin ? style.adminTable : style.table}>
        <thead className={style.th}>
          <tr>
            <th>Company</th>
            {props.admin ? <th>Candidate Name</th> : <React.Fragment />}
            <th>Interview Date</th>
            {!admin ? <th colSpan="2">Status</th> : <th colSpan="2">Status <Link to="/admin" ><button className={style.create}>Create</button></Link></th> }
            
          </tr>
        </thead>
        <tbody className={style.tb}>
          {reports.map((report) => (
            <TableInfo reportInfo={report} key={report.id} admin={props.admin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
