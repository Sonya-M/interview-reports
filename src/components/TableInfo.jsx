import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EyeFill } from "react-bootstrap-icons";
import style from "./Table.module.css";
import SingleReport from "./SingleReport";

export const TableInfo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!props.reportInfo) {
    return <div>Loading...</div>;
  }
  const info = props.reportInfo;

  return (
    <Fragment>
      <SingleReport show={show} onHide={handleClose} />
      <tr className={style.tr}>
        <td>{info.companyName}</td>
        <td>{info.getInterviewDate()}</td>
        <td
          className={info.status === "passed" ? style.passed : style.declined}
        >
          {info.status}
        </td>
        <td>
          <EyeFill className={style.eyeFill} onClick={handleShow} />
        </td>
      </tr>
    </Fragment>
  );
};

TableInfo.propTypes = {
  reportInfo: PropTypes.object.isRequired,
};

TableInfo.defaultProps = {
  reportInfo: null,
};
