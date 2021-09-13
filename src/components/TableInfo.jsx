import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EyeFill } from "react-bootstrap-icons";
import style from "./Table.module.css";
import ModalWrapper from "./ModalWrapper";
import ReportDetails from "./ReportDetails";

export const TableInfo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!props.reportInfo) {
    return <div>Loading...</div>;
  }
  const info = props.reportInfo;
  const modalBody = <ReportDetails info={info} />;

  return (
    <Fragment>
      <ModalWrapper
        title={info.candidateName}
        content={modalBody}
        show={show}
        onHide={handleClose}
      />
      <tr className={style.tr}>
        <td>{info.companyName}</td>
        <td>{info.getInterviewDate()}</td>
        <td
          className={info.status === "passed" ? style.passed : style.declined}
        >
          {info.status.toUpperCase()}
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
