import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { HouseFill, PlusCircleFill } from "react-bootstrap-icons";

export default function AdminHeader(props) {
  const iconClasses = "fs-4";
  let location = useLocation();
  let menu = [
    <Link to="/">
      <Button>
        <HouseFill className={iconClasses} />
      </Button>
    </Link>,
  ];

  if (location.pathname === "/admin-page") {
    menu.push(
      <Link to="/wizard">
        <Button>
          <PlusCircleFill className={iconClasses} />
        </Button>
      </Link>
    );
  } else if (location.pathname === "/wizard") {
    menu.push(
      <Button>
        <Link to="/admin-page">All Reports</Link>
      </Button>
    );
  }
  return (
    <Header
      title={<Link to="/admin-page">Reports Admin</Link>}
      menuItems={menu}
    />
  );
}
