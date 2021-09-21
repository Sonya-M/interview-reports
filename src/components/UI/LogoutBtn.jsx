import React from "react";
import { BoxArrowRight } from "react-bootstrap-icons";


export default function LogoutBtn(props) {
  return (
    <span onClick={props.onLogout}>
      <BoxArrowRight/> Log Out
    </span>
  );
}
