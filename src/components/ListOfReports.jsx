import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import { EyeFill, Trash } from "react-bootstrap-icons";
import style from "./ListOfReports.module.css"

const ListOfReports = (props) => {
  const {reports} = props;

  return (
  <ListGroup className="m-5">

    {reports.map(r => (
    <ListGroup.Item className={`mb-4 ${style.wrapper}`} key={r.id}>
      <Table borderless>
        <tbody>
          <tr className="d-flex">
            <td className="col-3">{r.companyName}</td>
            <td className="col-3">{r.candidateName}</td>
            <td className="col-3">{r.getInterviewDate()}</td>
            <td className="col-2">{r.status}</td>
            <td className={`col-1 ${style.specCell}`} rowSpan={2}>
              <EyeFill className="m-2" />
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