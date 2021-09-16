import React, {Fragment, useState, useEffect} from "react"
import { Table } from "../components/Table";
import ReportCommunicator from "../services/ReportCommunicator";


const AdminTable = (props) => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    ReportCommunicator.getAll().then((data) => {
      setReports(data);
    });
  }, []);

    return (
        <Fragment>
          <Table reports={reports} admin={true} />
          {/* <button onClick={nextStepHandler}>Create report</button> */}
          {console.log(`reports: ${reports}`)}
          {/* {console.log(candidates)} */}
        </Fragment>
      );
}
export default AdminTable