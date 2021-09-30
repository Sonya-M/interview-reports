import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";
import { HouseFill, PlusCircleFill } from "react-bootstrap-icons";

export default function AdminHeader(props) {
  let history = useHistory();
  const handleClick = () => {
    history.push("/admin");
    window.location.reload();
  };
  const title = <span onClick={handleClick}>Admin</span>;
  const menu = [
    <Link to="/">
      <HouseFill size="1.4rem" />
      &nbsp;&nbsp;Home
    </Link>,
    <Link to="/wizard">
      <PlusCircleFill size="1.4rem" />
      &nbsp;&nbsp;New Report
    </Link>,
    <Link to="/company">
      <PlusCircleFill size="1.4rem" />
      &nbsp;&nbsp;New Company
    </Link>,
    <Link to="/new_candidate">
    <PlusCircleFill size="1.4rem" />
    &nbsp;&nbsp;New Candidate
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
