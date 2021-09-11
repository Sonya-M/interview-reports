import React from "react";
import PropTypes from "prop-types";
import { EyeFill } from "react-bootstrap-icons";
import style from "./Table.module.css";

export const TableInfo = (props) => {
  if (!props.reportInfo) {
    return <div>Loading...</div>;
  }
  const info = props.reportInfo;

  return (
    <tr className={style.tr}>
      <td>{info.companyName}</td>
      <td>{info.interviewDate}</td>
      <td className={info.status === "passed" ? style.passed : style.declined}>
        {info.status}
      </td>
      <td>
        <EyeFill className={style.eyeFill} />
      </td>
    </tr>
  );
};

TableInfo.propTypes = {
  reportInfo: PropTypes.object.isRequired,
};

TableInfo.defaultProps = {
  reportInfo: null,
};
