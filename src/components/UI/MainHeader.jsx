import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { GearFill, QuestionCircleFill } from "react-bootstrap-icons";

export default function MainHeader(props) {
  const title = <Link to="/">JobBook</Link>;
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
