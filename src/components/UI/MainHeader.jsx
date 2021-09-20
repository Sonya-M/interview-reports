import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";
import { GearFill, PeopleFill, QuestionCircleFill } from "react-bootstrap-icons";

import { Button } from "react-bootstrap";

export default function MainHeader(props) {
  let location = useLocation();
  const logo = (
    <span onClick={props.onLogoClick} style={{ cursor: "pointer" }}>
      JobBook
    </span>
  );
  const adminLink = (
    <Link to="/admin">
      <Button className="text-info">  <GearFill /> Admin</Button>
    </Link>
  );

  const candidatesLink = (
    <Link to="/candidates">
      <Button>  <PeopleFill /> Candidates</Button>
    </Link>
  );
  const aboutLink = (
    <Link to="/about">
      <Button> <QuestionCircleFill /> About </Button>
    </Link>
  );

  // now header shows only when logged in
  let menu = [<LogoutBtn onLogout={props.onLogout} />];
  if (location.pathname !== "/") menu.unshift(candidatesLink);

  return <Header title={logo} menuItems={[ ...menu, adminLink, aboutLink]} />;
}
