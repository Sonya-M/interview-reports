import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";
import { GearFill, PeopleFill, QuestionCircleFill } from "react-bootstrap-icons";

import { Button } from "react-bootstrap";

export default function MainHeader(props) {
  let history = useHistory();
  const refreshPage = () => {
    history.push("/");
    window.location.reload();
  };
  const logo = (
    <span onClick={refreshPage}  style={{ cursor: "pointer" }}>
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
  let menu = [];
  if (History.pathname !== "/") menu.unshift(candidatesLink);

  return <Header title={logo} loggedIn={props.loggedIn} menuItems={[ ...menu, adminLink, aboutLink, <LogoutBtn onLogout={props.onLogout} />]} />;
}
