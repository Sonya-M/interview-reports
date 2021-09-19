import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { BookHalf, HouseFill, PlusCircleFill } from "react-bootstrap-icons";
import style from "./AdminHeader.module.css";

export default function AdminHeader(props) {
  const iconClasses = "fs-4";
  let location = useLocation();
  let menu = [
    <Link to="/">
      
        <HouseFill className={iconClasses} /> Home
      
    </Link>,
  ];

  if (location.pathname === "/admin") {
    menu.push(
      <Link to="/wizard">
        
          <PlusCircleFill className={iconClasses} /> Add new report
        
      </Link>
    );
  } else if (location.pathname === "/wizard") {
    menu.push(
      
        <Link to="/admin">
          <BookHalf/> All Reports</Link>
      
    );
  }
  return <Header title={<Link to="/admin" className={style.adminTitle}>Admin</Link>} menuItems={menu}  />;
}
