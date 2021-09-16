import React, {useState} from "react";

import ModalWrapper from "./ModalWrapper";
import ReportDetails from "./ReportDetails";
import { includesIgnoreCase } from "../utilities/helpers.js";

import { ListGroup, Table } from "react-bootstrap";
import { EyeFill, Trash } from "react-bootstrap-icons";
import style from "./ListOfReports.module.css"

const ListOfReports = (props) => {
  const {reports, searchText} = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  let searchResult;
  if (searchText === "") {
    searchResult = reports;
  } else {
    searchResult = reports.filter((r) => {
      return includesIgnoreCase(r.candidateName, searchText);
    });
  }
  

  return (
  <ListGroup className="m-5">
    {searchResult.map(r => (
    <ListGroup.Item className={`mb-4 ${style.wrapper}`} key={r.id}>
       <ModalWrapper
          title={r.candidateName}
          content={<ReportDetails info={r} />}
          show={show}
          onHide={handleClose}
        />
      <Table borderless>
        <tbody>
          <tr className="d-flex">
            <td className="col-3">{r.companyName}</td>
            <td className="col-3">{r.candidateName}</td>
            <td className="col-3">{r.getInterviewDate()}</td>
            <td className="col-2">{r.status}</td>
            <td className={`col-1 ${style.specCell}`} rowSpan={2}>
              <EyeFill className="m-2" onClick={handleShow} />
              <Trash className="m-2" />
            </td>
          </tr>
          <tr className={`d-flex ${style.labelTr}`}>
            <td className="col-3">Company</td>
            <td className="col-3">Candidate</td>
            <td className="col-3">Interview Date</td>
            <td className="col-2">Status</td>
          </tr>
          
        </tbody>
      </Table>
    </ListGroup.Item>
    ))}

  </ListGroup>
  )
}

export default ListOfReports;