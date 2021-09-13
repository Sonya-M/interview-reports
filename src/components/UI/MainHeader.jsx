import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";

export default function MainHeader(props) {
  let location = useLocation();
  const homeLink = <Link to="/">Interview Reports</Link>;
  const candidatesLink = <Link to="/">Candidates</Link>;
  let menu = [];
  if (props.loggedIn) {
    menu = [<LogoutBtn onLogout={props.onLogout} />];
  }
  return (
    <Header
      title={homeLink}
      menuItems={[location.pathname !== "/" && candidatesLink, ...menu]}
    />
  );
}
