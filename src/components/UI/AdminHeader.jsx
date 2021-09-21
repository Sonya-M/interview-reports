import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { HouseFill, PlusCircleFill } from "react-bootstrap-icons";

export default function AdminHeader(props) {
  const title = <Link to="/admin">Admin</Link>;
  const menu = [
    <Link to="/">
      <HouseFill /> Home
    </Link>,
    <Link to="/wizard">
      <PlusCircleFill /> New report
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
