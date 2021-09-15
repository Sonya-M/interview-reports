import React, { Fragment } from "react";
import { companyInfoId, companyInfoName } from "../pages/AdminPage";

const CompanyElement = (props) => {
  const { company } = props;
  const companyHandler = () => {
    companyInfoId.push(company.id);
    companyInfoName.push(company.name);
    console.log(companyInfoName);
  };
  return <li onClick={companyHandler}>{company.name}</li>;
};
export default CompanyElement;
