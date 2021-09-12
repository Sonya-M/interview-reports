import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";

export default function MainHeader(props) {
  let location = useLocation();
  const logo = (
    <span onClick={props.onLogoClick} style={{ cursor: "pointer" }}>
      Interview Reports
    </span>
  );
  const candidatesLink = <Link to="/">Candidates</Link>;
  let menu = [];
  if (props.loggedIn) {
    menu = [<LogoutBtn onLogout={props.onLogout} />];
  }
  return (
    <Header
      title={logo}
      menuItems={[location.pathname !== "/" && candidatesLink, ...menu]}
    />
  );
}
