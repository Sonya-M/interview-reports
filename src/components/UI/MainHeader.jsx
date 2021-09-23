import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";
import { GearFill, QuestionCircleFill } from "react-bootstrap-icons";

export default function MainHeader(props) {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
    window.location.reload();
  }
  const title = <span onClick={handleClick}>JobBook</span>;
  const menu = [
    <Link to="/admin">
      <GearFill size="1.4rem" />
      &nbsp;&nbsp;Admin
    </Link>,
    <Link to="/about">
      <QuestionCircleFill size="1.4rem" />
      &nbsp;&nbsp;About
    </Link>,
  ];
  return (
    <Header
      loggedIn={props.loggedIn}
      onLogout={props.onLogout}
      title={title}
      menu={menu}
    />
  );
}
