import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { HouseFill, PlusCircleFill } from "react-bootstrap-icons";
import LogoutBtn from "./LogoutBtn";

export default function AdminHeader(props) {
  const iconClasses = "fs-4";
  let history = useHistory();
  let location = useLocation();

  const refreshPage = () => {
    history.push("/admin");
    window.location.reload();
  };
  const logo = (
    <span onClick={refreshPage} style={{ cursor: "pointer" }}>
      Admin
    </span>
  );
  let menu = [
    <Link to="/">
      <Button>
        <HouseFill className={iconClasses} /> Home
      </Button>
    </Link>,
  ];

  if (location.pathname === "/admin") {
    menu.push(
      <Link to="/wizard">
        <Button>
          <PlusCircleFill className={iconClasses} /> Create new report
        </Button>
      </Link>
    );
  } else if (location.pathname === "/wizard") {
    menu.push(
      <Link to="/admin">
        <Button>All Reports</Button>
      </Link>
    );
  }
  menu.push(<LogoutBtn onLogout={props.onLogout} />);
  return <Header title={logo} menuItems={menu} loggedIn={props.loggedIn}/>;
}
