import React, { Fragment, useEffect, useState } from "react";
import CompanyCommunicator from "../services/CompanyCommunicator";
import CompanyList from "../components/CompanyList"
import { companyInfoId, companyInfoName } from "./AdminPage";

const Company = (props) => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    CompanyCommunicator.getAll().then((data) => {
      setCompany(data);
    });
  }, []);
const companyHendler = () => {
    companyInfoId.push(props.company.id)
    companyInfoName.push(props.company.name)
    console.log(companyInfoId)
}
  return (
    <Fragment>
        <CompanyList company={company}/>
      {console.log(company)}
    </Fragment>
  );
};
export default Company;
