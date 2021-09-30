import React, { Fragment, useState } from "react";
import CompanyCommunicator from "../services/CompanyCommunicator";
import style from "./Company.module.css";
import { useHistory } from 'react-router-dom';

const Company = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noId, setNoId] = useState(false);
  const [noName, setNoName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noData, setNoData] = useState(false);
  const history = useHistory();

  const handleId = () => {
    setId(document.getElementById("company_id").value);
    setNoId(false);
    console.log(id.length);
  };
  const handleName = () => {
    setName(document.getElementById("name").value);
    setNoName(false)
  };
  const handleEmail = () => {
    setEmail(document.getElementById("email").value);
    setNoEmail(false)
  };

  const handleBtn = () => {
    const formInput = {
      id: id,
      name: name,
      email: email,
    };
    if (id.length < 1){
      setNoId(true);
      setNoData(true)
    }
    
    if (name.length < 1){
      setNoName(true);
      setNoData(true)
    }
    if (email.length < 1 || !email.includes('@') || !email.includes('.')){
      setNoEmail(true)
      setNoData(true)
    }
   
    
    else {
      setNoData(false)
      CompanyCommunicator.save(formInput).then((response) =>
        console.log(response)
      );
      history.push('/admin')

    } 
  };
  return (
    <Fragment>
      <h1 style={{textAlign: 'center'}}>Add new company</h1>
      <div className={style.container}>
        <label htmlFor="company_id">ID:</label>
        <input
          type="number"
          id="company_id"
          className={noId ? style.inputError : style.input}
          placeholder="Company ID"
          onChange={handleId}
        ></input>
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          className={noName ? style.inputError : style.input}
          placeholder="Company name"
          onChange={handleName}
        ></input>
        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          className={noEmail ? style.inputError : style.input}
          placeholder="example@example.com"
          onChange={handleEmail}
        >
          {console.log(`id: ${id.length} name: ${name} email: ${email}  `)}
        </input>
        <p className={noData ? style.error : style.noError}>All inputs are required</p>
        <button onClick={handleBtn}>Save</button>
      </div>
    </Fragment>
  );
};
export default Company;
