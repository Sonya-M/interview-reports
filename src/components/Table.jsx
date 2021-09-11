import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reports } from "../data/reports";
import style from "./Table.module.css";
import { EyeFill } from "react-bootstrap-icons";
import { TableInfo } from "./TableInfo";

export const Table = (props) => {
  const { reports } = props;

  return (
    <div className={`container ${style.tableContainer}`}>
      <table className={`${style.table} container`}>
        <thead className={style.th}>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <TableInfo reportInfo={report} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
