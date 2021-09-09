import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";

export default function MainHeader(props) {
  const homeLink = <Link to="/">Interview Reports</Link>;
  let menu = [];
  const candidatesLink = <Link to="/">Candidates</Link>;
  if (props.loggedIn) {
    menu = [candidatesLink, <LogoutBtn onLogout={props.onLogout} />];
  }
  return <Header title={homeLink} menuItems={menu} />;
}
