import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import CandidateCommunicator from "../services/CandidateCommunicator";
import style from "./NewCandidate.module.css";

const NewCandidate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [avatar, setAvatar] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png");
  const [noId, setNoId] = useState(false);
  const [noName, setNoName] = useState(false);
  const [noBirthday, setNoBirthday] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noEducation, setNoEducation] = useState(false);
  const [noAvatar, setNoAvatar] = useState(false);
  const [noData, setNoData] = useState(false);
  const history = useHistory();

  const handleId = () => {
    setId(document.getElementById("candidate_id").value);
    setNoId(false);
    console.log(id.length);
  };
  const handleName = () => {
    setName(document.getElementById("name").value);
    setNoName(false);
  };
  const handleBirthday = () => {
      setBirthday(document.getElementById("birthday").value);
      setNoBirthday(false);
  }
  const handleEmail = () => {
    setEmail(document.getElementById("email").value);
    setNoEmail(false);
  };
  const handleEducation = () => {
      setEducation(document.getElementById("education").value);
      setNoEducation(false);
  }

  const handleBtn = () => {
    const formInput = {
      id: id,
      name: name,
      birthday: birthday,
      email: email,
      education: education,
      avatar: avatar
    };
    if (id.length < 1) {
      setNoId(true);
      setNoData(true);
    }

    if (name.length < 1) {
      setNoName(true);
      setNoData(true);
    }
    if (birthday.length < 1 ) {
        setNoBirthday(true);
        setNoData(true);
    }
    if (email.length < 1 || !email.includes("@") || !email.includes(".")) {
      setNoEmail(true);
      setNoData(true);
    } 
    if (education.length < 1) {
        setNoEducation(true);
        setNoData(true);
    }
    else {
      setNoData(false);
      CandidateCommunicator.save(formInput).then((response) =>
        console.log(response)
      );
      history.push("/admin");
    }
  };
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Add new candidate</h1>
      <div className={style.container}>
        <label htmlFor="candidate_id">ID:</label>
        <input
          type="number"
          id="candidate_id"
          className={noId ? style.inputError : style.input}
          placeholder="Candidte ID"
          onChange={handleId}
        ></input>
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          className={noName ? style.inputError : style.input}
          placeholder="Candidate name"
          onChange={handleName}
        ></input>
        <label htmlFor="birthday">BIRTHDAY</label>
        <input
          type="date"
          id="birthday"
          className={noBirthday ? style.inputError : style.input}
          
         onChange={handleBirthday}
        />
        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          className={noEmail ? style.inputError : style.input}
          onChange={handleEmail}
          placeholder="example@example.com"
        >
          {console.log(`id: ${id.length} name: ${name} email: ${email}  `)}
        </input>
        <label htmlFor="education">EDUCATION</label>
        <input
          type="text"
          id="education"
          className={noEducation ? style.inputError : style.input}
          placeholder="Education"
         onChange={handleEducation}
        />
        <p className={noData ? style.error : style.noError}>
          All inputs are required
        </p>
        <button onClick={handleBtn}>Save</button>
      </div>
    </Fragment>
  );
};

export default NewCandidate;
