import React from "react";
import { Table } from "react-bootstrap";

import { Eye } from "react-bootstrap-icons";

export default function ReportList(props) {
  const filtered = props.reports.filter((r) => {
    return (
      includesIgnoreCase(r.companyName, props.searchText) ||
      includesIgnoreCase(r.candidateName, props.searchText)
    );
  });

  return (
    <Table>
      
    </Table>
  );
}
