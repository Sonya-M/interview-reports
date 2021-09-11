import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reports } from "../data/reports";
import style from "./Table.module.css";
import { EyeFill } from "react-bootstrap-icons";
import { TableInfo } from "./TableInfo";

export const Table = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let dataTest = [];
  const prepData = () => {
    for (let i = 0; i < reports.length; i++) {
      if (reports[i].candidateId == id) {
        dataTest.push(reports[i]);
        setData(dataTest);
        console.log(reports[i]);
        console.log(dataTest);
      }
    }
  };

  useEffect(() => {
    prepData();
  }, []);
  console.log(dataTest);

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
          {data.map((d) => (
            <TableInfo reportInfo={d} />
          ))}
        </tbody>
        {console.log(data)}
      </table>
    </div>
  );
};
