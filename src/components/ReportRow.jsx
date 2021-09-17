import React, { Fragment, useState } from "react";

import ModalWrapper from "./ModalWrapper";
import ReportDetails from "./ReportDetails"

import { Table } from "react-bootstrap";
import { EyeFill, Trash } from "react-bootstrap-icons";
import style from "./ReportRow.module.css"

const ReportRow = (props) => {
  const { report } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
    <ModalWrapper
          title={report.candidateName}
          content={<ReportDetails info={report} />}
          show={show}
          onHide={handleClose}
        />
      <Table borderless>
        <tbody>
          <tr>
            <td className="w-25">{report.companyName}</td>
            <td className="w-25">{report.candidateName}</td>
            <td className="w-25">{report.getInterviewDate()}</td>
            <td className="w-25">{report.status}</td>
            <td rowSpan={2} >
              <EyeFill  onClick={handleShow} className="align-self-center" />
            </td>
            <td rowSpan={2}>  
              <Trash />
            </td>
          </tr>
          <tr className={style.labelTr}>
            <td>Company</td>
            <td>Candidate</td>
            <td>Interview Date</td>
            <td>Status</td>
          </tr>
          
        </tbody>
      </Table>
      </Fragment>
  )
}

export default ReportRow;