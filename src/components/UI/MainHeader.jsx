import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";

import { Button } from "react-bootstrap";

export default function MainHeader(props) {
  let location = useLocation();
  const logo = (
    <span onClick={props.onLogoClick} style={{ cursor: "pointer" }}>
      Interview Reports
    </span>
  );
<<<<<<< HEAD
  const candidatesLink = <Link to="/">Candidates</Link>;
  const reportsLink = <Link to="/reports">Reports</Link>;
  let menu = [];
  if (props.loggedIn) {
    menu = [<LogoutBtn onLogout={props.onLogout} />];
  }
  return (
    <Header
      title={logo}
      menuItems={[location.pathname !== "/" && candidatesLink, location.pathname !== "/reports" && reportsLink, ...menu]}
    />
=======
  const adminLink = (
    <Link to="/admin">
      <Button className="text-info">Admin</Button>
    </Link>
  );

  const candidatesLink = (
    <Link to="/candidates">
      <Button>Candidates</Button>
    </Link>
>>>>>>> main
  );

  // now header shows only when logged in
  let menu = [<LogoutBtn onLogout={props.onLogout} />];
  if (location.pathname !== "/") menu.unshift(candidatesLink);

  return <Header title={logo} menuItems={[adminLink, ...menu]} />;
}
