import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  EyeFill,
  HandThumbsUpFill,
  HandThumbsDownFill,
  // XCircleFill,
  // CheckCircleFill,
} from "react-bootstrap-icons";
import style from "./TableInfo.module.css";
import ModalWrapper from "./ModalWrapper";
import ReportDetails from "./ReportDetails";
import { TrashFill } from "react-bootstrap-icons";

export const TableInfo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const info = props.reportInfo;
  const modalBody = <ReportDetails info={info} />;

  const passed = info.status.toLowerCase() === "passed";

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
        {props.admin ? <td>{info.candidateName}</td> : <Fragment />}
        <td className="text-center">{info.getInterviewDate()}</td>
        <td className={`text-center ${passed ? style.passed : style.declined}`}>
          {passed ? <HandThumbsUpFill /> : <HandThumbsDownFill />}
        </td>
        <td className="text-center">
          <EyeFill className={style.eyeFill} onClick={handleShow} />
        </td>
        {/* TODO: make a separate TebleInfo.module.css */}
        {props.admin ? (
          <td className="text-center">
            <span
              style={{ color: "darkred", cursor: "pointer" }}
              onClick={() => props.onDelete(info.id)}
            >
              <TrashFill />
            </span>
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
