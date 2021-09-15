import React, { Fragment } from "react";
import { companyInfoId, companyInfoName } from "../pages/AdminPage";
import CompanyElement from "./CompanyElement"

const CompanyList = (props) => {
    const { company } = props;
    // let comp = []
    // comp.push(company)
   
    return (<ul>
        Nesto {console.log(company)}
    {company.map((com) => (
        <Fragment>
      <CompanyElement key={com.id} company={com} />
        
      </Fragment>
    ))}
  </ul>)
}
export default CompanyList