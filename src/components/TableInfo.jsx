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
        {props.showCandidateName ? <td>{info.candidateName}</td> : <Fragment />}
        <td>{info.getInterviewDate()}</td>
        <td
          className={info.status === "passed" ? style.passed : style.declined}
        >
          {info.status.toUpperCase()}
        </td>
        <td>
          <EyeFill className={style.eyeFill} onClick={handleShow} />
        </td>
        {/* TODO: make a separate TebleInfo.module.css */}
        {props.showDeleteBtn ? (
          <td
            className="deleteBtn"
            onClick={() => props.onDelete(info.id)}
            style={{
              cursor: "pointer",
              color: "darkred",
            }}
          >
            <span>X</span>
          </td>
        ) : (
          <Fragment />
        )}
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
